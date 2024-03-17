<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/nunito"
    import { afterNavigate } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { AppShell } from "@skeletonlabs/skeleton"
    import { darkmode } from "$stores/darkmode"
    import { theme } from "$stores/theme"

    afterNavigate((event: AfterNavigate): void => {
        const isNewPage: boolean = event.from?.url.pathname !== event.to?.url.pathname
        const elementPage: Element | null = document.querySelector('#page')

        if (isNewPage && (elementPage !== null)) {
            elementPage.scrollTop = 0
        }
    })
</script>

<custom-theming-element data-theme={$theme} class="{$darkmode ? 'dark' : 'light'}">
    <AppShell slotPageContent="text-surface-900-50-token bg-surface-50-900-token">
        <!-- Main Content -->
        <div class="p-4">
            <slot />
        </div>
    </AppShell>
</custom-theming-element>
