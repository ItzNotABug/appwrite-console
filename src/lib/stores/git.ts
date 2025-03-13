import { page } from '$app/stores';
import { get } from 'svelte/store';
import { sdk } from './sdk';

export function connectGitHub(callbackState: Record<string, string> = null) {
    const redirect = new URL(get(page).url);
    if (callbackState) {
        Object.keys(callbackState).forEach((key) => {
            redirect.searchParams.append(key, callbackState[key]);
        });
    }
    const target = new URL(`${sdk.forProject.client.config.endpoint}/vcs/github/authorize`);
    target.searchParams.set('project', get(page).params.project);
    target.searchParams.set('success', redirect.toString());
    target.searchParams.set('failure', redirect.toString());
    target.searchParams.set('mode', 'admin');
    return target;
}

export function deploymentStatusConverter(status: string) {
    // Status component possible values - status: 'waiting' | 'ready' | 'processing' | 'pending' | 'failed' | 'complete';
    switch (status) {
        case 'ready':
            return 'ready';
        case 'processing':
            return 'processing';
        case 'building':
            return 'pending';
        case 'waiting':
            return 'waiting';
        case 'queued':
            return 'waiting';
        case 'failed':
            return 'failed';
    }
}
