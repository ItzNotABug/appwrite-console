import { BillingPlan, Dependencies } from '$lib/constants';
import { sdk } from '$lib/stores/sdk';
import type { PageLoad } from './$types';
import type { Coupon } from '$lib/sdk/billing';

export const load: PageLoad = async ({ depends, parent, url }) => {
    const { members, organization, currentPlan } = await parent();
    depends(Dependencies.ORGANIZATION);

    const coupon = await getCoupon(url);
    let plan = getPlanFromUrl(url);

    if (organization?.billingPlan === BillingPlan.SCALE) {
        plan = BillingPlan.SCALE;
    } else {
        plan = BillingPlan.PRO;
    }

    const selfService = currentPlan?.selfService ?? true;

    return {
        members,
        plan,
        coupon,
        selfService
    };
};

function getPlanFromUrl(url: URL): BillingPlan | null {
    if (url.searchParams.has('plan')) {
        const plan = url.searchParams.get('plan');
        if (plan && plan in BillingPlan) {
            return plan as BillingPlan;
        }
    }
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
