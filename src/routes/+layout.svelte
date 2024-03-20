<script lang="ts">
    import '../app.css'
    import '@fontsource-variable/nunito'
    import 'highlight.js/styles/github-dark.css'
    import { afterNavigate } from '$app/navigation'
    import type { AfterNavigate } from '@sveltejs/kit'
    import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton'
    import hljs from 'highlight.js/lib/core'
    import shell from 'highlight.js/lib/languages/shell'
    import xml from 'highlight.js/lib/languages/xml'
    import json from 'highlight.js/lib/languages/json'
    import javascript from 'highlight.js/lib/languages/javascript'
    import typescript from 'highlight.js/lib/languages/typescript'
    import { darkmode } from '$stores/darkmode'
    import { theme } from '$stores/theme'

    hljs.registerLanguage('shell', shell)
    hljs.registerLanguage('xml', xml)
    hljs.registerLanguage('html', xml)
    hljs.registerLanguage('json', json)
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('typescript', typescript)
    storeHighlightJs.set(hljs)

    afterNavigate((event: AfterNavigate): void => {
        const isNewPage: boolean = event.from?.url.pathname !== event.to?.url.pathname
        const elementPage: Element | null = document.querySelector('#page')

        if (isNewPage && elementPage !== null) {
            elementPage.scrollTop = 0
        }
    })
</script>

<custom-theming-element data-theme={$theme} class={$darkmode ? 'dark' : 'light'}>
    <AppShell slotPageContent="text-surface-900-50-token bg-surface-50-900-token">
        <!-- Main Content -->
        <div class="p-4">
            <slot />
        </div>
    </AppShell>
</custom-theming-element>
