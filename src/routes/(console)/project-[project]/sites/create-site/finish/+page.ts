import { RuleType, sdk } from '$lib/stores/sdk';
import { error } from '@sveltejs/kit';
import { Query } from '@appwrite.io/console';
import { Dependencies } from '$lib/constants';
import { DeploymentResourceType } from '$lib/stores/sdk';

export const load = async ({ url, depends }) => {
    depends(Dependencies.SITE);
    if (!url.searchParams.has('site')) error(404, 'Deployment is not optional');
    const siteId = url.searchParams.get('site');
    const site = await sdk.forProject.sites.get(siteId);
    const proxyRuleList = await sdk.forProject.proxy.listRules([
        Query.equal('type', RuleType.DEPLOYMENT),
        Query.equal('deploymentResourceType', DeploymentResourceType.SITE),
        Query.equal('deploymentResourceId', siteId),
        Query.equal('deploymentId', site.deploymentId)
    ]);
    return {
        site,
        deployment: await sdk.forProject.sites.getDeployment(siteId, site.deploymentId),
        proxyRuleList
    };
};
