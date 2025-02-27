import { sdk } from '$lib/stores/sdk';
import { Dependencies } from '$lib/constants';
import type { PageLoad } from './$types';
import { Query } from '@appwrite.io/console';
import { RuleType } from '$lib/stores/sdk';

export const load: PageLoad = async ({ params, depends, parent }) => {
    depends(Dependencies.DEPLOYMENT);

    const { site } = await parent();

    const [deployment, proxyRuleList] = await Promise.all([
        sdk.forProject.sites.getDeployment(params.site, params.deployment),
        sdk.forProject.proxy.listRules([
            Query.equal('type', RuleType.DEPLOYMENT),
            Query.equal('value', params.deployment)
        ])
    ]);

    return {
        deployment,
        site,
        proxyRuleList
    };
};
