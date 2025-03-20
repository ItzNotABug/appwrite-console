import { sdk } from '$lib/stores/sdk';

export const load = async ({ parent }) => {
    const { frameworks } = await parent();

    return {
        frameworks,
        template: await sdk.forProject.sites.getTemplate('starter-for-js')
    };
};
