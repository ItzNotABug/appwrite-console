import { Query } from '@appwrite.io/console';
import { sdk } from '$lib/stores/sdk';
import { getLimit, getPage, getSearch, pageToOffset } from '$lib/helpers/load';
import { CARD_LIMIT, Dependencies } from '$lib/constants';

export const load = async ({ url, depends, route }) => {
    depends(Dependencies.SITES);

    const page = getPage(url);
    const search = getSearch(url);
    const limit = getLimit(url, route, CARD_LIMIT);
    const offset = pageToOffset(page, limit);

    const siteList = await sdk.forProject.sites.list(
        [Query.limit(limit), Query.offset(offset), Query.orderDesc('')],
        search || undefined
    );

    return {
        offset,
        limit,
        search,
        siteList
    };
};
