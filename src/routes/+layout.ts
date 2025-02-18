import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';
import 'tippy.js/dist/tippy.css';
import { sdk } from '$lib/stores/sdk';
import { redirect } from '@sveltejs/kit';
import { Dependencies } from '$lib/constants';
import type { LayoutLoad } from './$types';
import { redirectTo } from './store';
import { base } from '$app/paths';
import type { Account } from '$lib/stores/user';
import type { AppwriteException } from '@appwrite.io/console';
import { isCloud } from '$lib/system';
import { checkPricingRefAndRedirect } from '$lib/helpers/pricingRedirect';

export const ssr = false;

export const load: LayoutLoad = async ({ depends, url, route }) => {
    depends(Dependencies.ACCOUNT);

    const [account, error] = (await sdk.forConsole.account
        .get()
        .then((response) => [response, null])
        .catch((error) => [null, error])) as [Account, AppwriteException];

    if (url.searchParams.has('forceRedirect')) {
        redirectTo.set(url.searchParams.get('forceRedirect') || null);
        url.searchParams.delete('forceRedirect');
    }

    if (account) {
        return {
            account,
            organizations: isCloud
                ? await sdk.forConsole.billing.listOrganization()
                : await sdk.forConsole.teams.list()
        };
    }

    const isPublicRoute = route.id?.startsWith('/(public)');
    if (!isPublicRoute) {
        url.searchParams.set('redirect', url.pathname);
    }

    if (error.type === 'user_more_factors_required') {
        if (url.pathname === `${base}/mfa`)
            return {
                mfaRequired: true
            };
        redirect(303, withParams(`${base}/mfa`, url));
    }

    if (!isPublicRoute) {
        if (isCloud) {
            checkPricingRefAndRedirect(url.searchParams, true);
        }

        redirect(303, withParams(`${base}/login`, url));
    }
};

function withParams(pathname: string, url: URL): string {
    const { searchParams } = url;
    const redirect = searchParams.get('redirect');
    if (redirect) {
        const extras = new URLSearchParams(searchParams);
        extras.delete('redirect');
        const extraQuery = extras.toString();
        const finalRedirect = extraQuery
            ? `${redirect}${redirect.includes('?') ? '&' : '?'}${extraQuery}`
            : redirect;
        return `${pathname}?redirect=${encodeURIComponent(finalRedirect)}`;
    }
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
}
