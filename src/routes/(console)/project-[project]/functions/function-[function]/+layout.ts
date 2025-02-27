import { sdk } from '$lib/stores/sdk';
import { Dependencies } from '$lib/constants';
import type { LayoutLoad } from './$types';
import Breadcrumbs from './breadcrumbs.svelte';
import Header from './header.svelte';
import { error } from '@sveltejs/kit';
import { Query } from '@appwrite.io/console';
import { RuleType } from '$lib/stores/sdk';

export const load: LayoutLoad = async ({ params, depends }) => {
    depends(Dependencies.FUNCTION);
    depends(Dependencies.DEPLOYMENTS);

    try {
        const [func, proxyRuleList] = await Promise.all([
            sdk.forProject.functions.get(params.function),
            sdk.forProject.proxy.listRules([
                Query.equal('type', RuleType.DEPLOYMENT),
                Query.equal('automation', `function=${params.function}`),
                Query.limit(1)
            ])
        ]);

        return {
            header: Header,
            breadcrumbs: Breadcrumbs,
            function: func,
            proxyRuleList
        };
    } catch (e) {
        error(e.code, e.message);
    }
};
