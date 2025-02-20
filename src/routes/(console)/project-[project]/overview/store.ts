import { sdk } from '$lib/stores/sdk';
import { cachedStore } from '$lib/helpers/cache';
import { writable, type Writable } from 'svelte/store';
import type { Models, ProjectUsageRange } from '@appwrite.io/console';

export const usage = cachedStore<
    Models.UsageProject,
    {
        load: (start: string, end: string, period: ProjectUsageRange) => Promise<void>;
    }
>('projectUsage', function ({ set }) {
    return {
        load: async (start, end, period) => {
            const usages = await sdk.forProject.project.getUsage(start, end, period);
            set(usages);
            set({
                executionsTotal: 123,
                documentsTotal: 123,
                databasesTotal: 123,
                databasesStorageTotal: 123,
                usersTotal: 1123,
                filesStorageTotal: 123,
                functionsStorageTotal: 15152301,
                buildsStorageTotal: 15152301,
                deploymentsStorageTotal: 123,
                bucketsTotal: 123,
                executionsMbSecondsTotal: 234234,
                buildsMbSecondsTotal: 6912,
                databasesReadsTotal: 234324,
                databasesWritesTotal: 234234,
                requests: [
                    { value: 1, date: '2025-01-20T00:00:00.000+00:00' },
                    { value: 4, date: '2025-01-21T00:00:00.000+00:00' },
                    { value: 10, date: '2025-01-22T00:00:00.000+00:00' },
                    { value: 45, date: '2025-01-23T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-24T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-25T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-26T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-27T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-28T00:00:00.000+00:00' },
                    { value: 23, date: '2025-01-29T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-30T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-31T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-01T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-02T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-03T00:00:00.000+00:00' },
                    { value: 23, date: '2025-02-04T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-05T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-06T00:00:00.000+00:00' },
                    { value: 2, date: '2025-02-07T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-08T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-09T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-10T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-11T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-12T00:00:00.000+00:00' },
                    { value: 234, date: '2025-02-13T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-14T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-15T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-16T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-17T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-18T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-19T00:00:00.000+00:00' }
                ],
                network: [
                    { date: '2025-01-20T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-21T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-22T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-23T00:00:00.000+00:00', value: 123 },
                    { date: '2025-01-24T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-25T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-26T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-27T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-28T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-29T00:00:00.000+00:00', value: 0 },
                    { date: '2025-01-30T00:00:00.000+00:00', value: 1 },
                    { date: '2025-01-31T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-01T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-02T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-03T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-04T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-05T00:00:00.000+00:00', value: 2 },
                    { date: '2025-02-06T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-07T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-08T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-09T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-10T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-11T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-12T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-13T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-14T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-15T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-16T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-17T00:00:00.000+00:00', value: 0 },
                    { date: '2025-02-18T00:00:00.000+00:00', value: 45 },
                    { date: '2025-02-19T00:00:00.000+00:00', value: 0 }
                ],
                users: [
                    { value: 0, date: '2025-01-20T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-21T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-22T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-23T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-24T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-25T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-26T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-27T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-28T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-29T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-30T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-31T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-01T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-02T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-03T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-04T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-05T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-06T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-07T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-08T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-09T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-10T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-11T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-12T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-13T00:00:00.000+00:00' },
                    { value: 1, date: '2025-02-14T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-15T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-16T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-17T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-18T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-19T00:00:00.000+00:00' }
                ],
                executions: [
                    { value: 0, date: '2025-01-20T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-21T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-22T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-23T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-24T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-25T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-26T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-27T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-28T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-29T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-30T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-31T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-01T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-02T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-03T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-04T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-05T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-06T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-07T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-08T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-09T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-10T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-11T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-12T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-13T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-14T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-15T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-16T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-17T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-18T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-19T00:00:00.000+00:00' }
                ],
                executionsBreakdown: [],
                bucketsBreakdown: [],
                databasesStorageBreakdown: [
                    { resourceId: '67b5ee88002a0f1572ef', name: 'test', value: 0 }
                ],
                executionsMbSecondsBreakdown: [],
                buildsMbSecondsBreakdown: [],
                functionsStorageBreakdown: [],
                authPhoneTotal: 0,
                authPhoneEstimate: 0,
                authPhoneCountryBreakdown: [],
                databasesReads: [
                    { value: 0, date: '2025-01-20T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-21T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-22T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-23T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-24T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-25T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-26T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-27T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-28T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-29T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-30T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-31T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-01T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-02T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-03T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-04T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-05T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-06T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-07T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-08T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-09T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-10T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-11T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-12T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-13T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-14T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-15T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-16T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-17T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-18T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-19T00:00:00.000+00:00' }
                ],
                databasesWrites: [
                    { value: 0, date: '2025-01-20T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-21T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-22T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-23T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-24T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-25T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-26T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-27T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-28T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-29T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-30T00:00:00.000+00:00' },
                    { value: 0, date: '2025-01-31T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-01T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-02T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-03T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-04T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-05T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-06T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-07T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-08T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-09T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-10T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-11T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-12T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-13T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-14T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-15T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-16T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-17T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-18T00:00:00.000+00:00' },
                    { value: 0, date: '2025-02-19T00:00:00.000+00:00' }
                ]
            });
        }
    };
});

export const selectedTab: Writable<'platforms' | 'keys'> = writable('platforms');
