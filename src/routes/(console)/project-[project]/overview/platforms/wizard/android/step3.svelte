<script lang="ts">
    import { Code } from '$lib/components';
    import Id from '$lib/components/id.svelte';
    import { WizardStep } from '$lib/layout';
    import { sdk } from '$lib/stores/sdk';
    import { isCloud } from '$lib/system';

    const { endpoint, project } = sdk.forProject.client.config;
    const code = `import io.appwrite.Client
import io.appwrite.services.Account

${
    isCloud
        ? `val client = Client(context).setProject("${project}")`
        : `val client = Client(context)
    .setEndpoint("${endpoint}")
    .setProject("${project}")
    .setSelfSigned(status: true) // For self signed certificates, only use for development`
}`;
</script>

<WizardStep>
    <svelte:fragment slot="title">Initialize</svelte:fragment>

    <h2 class="heading-level-7">Initialize your SDK</h2>
    <p>
        Initialize your SDK by pointing the client to your Appwrite project using your <Id
            value={project}>Project ID</Id
        >.
    </p>
    <div class="u-margin-block-start-16">
        <Code
            label="Android SDK"
            labelIcon="android"
            language="kotlin"
            {code}
            withCopy
            withLineNumbers
            noMargin />
    </div>
</WizardStep>
