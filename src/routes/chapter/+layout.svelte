<script lang="ts">
    import { onMount } from 'svelte'
    import { getToastStore } from '@skeletonlabs/skeleton'
    import type { ToastStore } from '@skeletonlabs/skeleton'

    const toastStore: ToastStore = getToastStore()

    onMount(() => {
        toastStore.clear()
        toastStore.trigger({
            message: "The Copy Button aren't working.",
            background: 'variant-filled-warning',
            timeout: 10000,
        })
    })
</script>

<slot />
