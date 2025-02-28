import Header from './header.svelte';
import Breadcrumbs from './breadcrumbs.svelte';
import { sdk } from '$lib/stores/sdk';
import { Dependencies } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, depends }) => {
    depends(Dependencies.KEY);

    const apiKey = await sdk.forConsole.projects.getKey(params.project, params.key);
    if (apiKey.expire) {
        apiKey.expire = new Date(apiKey.expire).toISOString().slice(0, 23);
    } else {
        apiKey.expire = undefined;
    }

    return {
        apiKey,
        header: Header,
        breadcrumbs: Breadcrumbs
    };
};
