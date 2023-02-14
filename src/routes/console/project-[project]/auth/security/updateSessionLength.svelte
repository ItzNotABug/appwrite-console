<script lang="ts">
    import { invalidate } from '$app/navigation';
    import { Submit, trackError, trackEvent } from '$lib/actions/analytics';
    import { CardGrid, Heading } from '$lib/components';
    import { Dependencies } from '$lib/constants';
    import { Button, InputNumber, InputSelect } from '$lib/elements/forms';
    import { secsToUnit, timeToSeconds } from '$lib/helpers/timeConversion';
    import { addNotification } from '$lib/stores/notifications';
    import { sdkForConsole } from '$lib/stores/sdk';
    import { writable } from 'svelte/store';
    import { project } from '../../store';

    enum Period {
        Days = 'd',
        Hours = 'h',
        Minutes = 'm',
        Seconds = 's'
    }

    const projectId = $project.$id;
    const options = [
        { label: 'days', value: Period.Days },
        { label: 'hours', value: Period.Hours },
        { label: 'minutes', value: Period.Minutes },
        { label: 'seconds', value: Period.Seconds }
    ];

    let period = writable(Period.Seconds);

    function getInitialTime() {
        let t = $project.authDuration;

        if (t >= 86400 && t % 86400 === 0) {
            $period = Period.Days;
            return t / 86400;
        }

        if (t >= 3600 && t % 3600 === 0) {
            $period = Period.Hours;
            return t / 3600;
        }

        if (t >= 60 && t % 60 === 0) {
            $period = Period.Minutes;
            return t / 60;
        }

        return t;
    }

    let time = getInitialTime();
    let timeInSecs = timeToSeconds(time, $period);

    period.subscribe((p) => {
        time = secsToUnit(timeInSecs, p);
    });

    $: timeInSecs = timeToSeconds(time, $period);

    async function updateSessionLength() {
        try {
            await sdkForConsole.projects.updateAuthDuration(projectId, timeInSecs);
            invalidate(Dependencies.PROJECT);

            addNotification({
                type: 'success',
                message: 'Updated project users limit successfully'
            });
            trackEvent(Submit.SessionsLengthUpdate);
        } catch (error) {
            addNotification({
                type: 'error',
                message: error.message
            });
            trackError(error, Submit.SessionsLengthUpdate);
        }
    }
</script>

<CardGrid>
    <Heading tag="h2" size="6">Session Length</Heading>

    <p>
        If you reduce the limit, users who are currently logged in will be logged out of the
        application.
    </p>
    <svelte:fragment slot="aside">
        <form class="form u-grid u-gap-16">
            <ul class="form-list is-multiple">
                <InputNumber id="length" label="Length" bind:value={time} />
                <InputSelect id="period" label="Time Period" bind:value={$period} {options} />
            </ul>
        </form>
    </svelte:fragment>

    <svelte:fragment slot="actions">
        <Button
            disabled={timeToSeconds(time, $period) === $project.authDuration}
            on:click={() => {
                updateSessionLength();
            }}>
            Update
        </Button>
    </svelte:fragment>
</CardGrid>