import { BillingPlan } from '$lib/constants';
import { sdk } from '$lib/stores/sdk';
import type { PageLoad } from './$types';
import type { Coupon } from '$lib/sdk/billing';
import type { Organization } from '$lib/stores/organization';

export const load: PageLoad = async ({ url, parent }) => {
    const { organizations } = await parent();
    const coupon = await getCoupon(url);
    let plan = getPlanFromUrl(url);
    const hasFreeOrganizations = organizations.teams?.some(
        (org) => (org as Organization)?.billingPlan === BillingPlan.FREE
    );
    if (plan === BillingPlan.FREE && hasFreeOrganizations) {
        plan = BillingPlan.PRO;
    }

    return {
        plan,
        coupon,
        hasFreeOrganizations,
        name: url.searchParams.get('name') ?? ''
    };
};

function getPlanFromUrl(url: URL): BillingPlan | null {
    if (url.searchParams.has('plan')) {
        const plan = url.searchParams.get('plan');
        if (plan && plan in BillingPlan) {
            return plan as BillingPlan;
        }
    }
    return BillingPlan.FREE;
}

async function getCoupon(url: URL): Promise<Coupon | null> {
    if (url.searchParams.has('code')) {
        const coupon = url.searchParams.get('code');
        try {
            return sdk.forConsole.billing.getCoupon(coupon);
        } catch (e) {
            return null;
        }
    }
    return null;
}
