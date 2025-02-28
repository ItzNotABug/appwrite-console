import { derived } from 'svelte/store';
import { page } from '$app/stores';
import type { Models } from '@appwrite.io/console';

export const apiKey = derived(page, ($page) => $page.data.apiKey as Models.Key);
