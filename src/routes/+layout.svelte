<script lang="ts">
    import '../app.css'
    import '@fontsource-variable/nunito'
    import 'highlight.js/styles/github-dark.css'
    import { writable } from 'svelte/store'
    import type { Writable } from 'svelte/store'
    import { afterNavigate } from '$app/navigation'
    import type { AfterNavigate } from '@sveltejs/kit'
    import { initializeStores, Drawer, getDrawerStore, Toast, getToastStore, storeHighlightJs, AppShell, AppBar } from '@skeletonlabs/skeleton'
    import type { DrawerStore, ToastStore } from '@skeletonlabs/skeleton'
    import hljs from 'highlight.js/lib/core'
    import html from 'highlight.js/lib/languages/xml'
    import css from 'highlight.js/lib/languages/css'
    import js from 'highlight.js/lib/languages/javascript'
    import ts from 'highlight.js/lib/languages/typescript'
    import json from 'highlight.js/lib/languages/json'
    import ini from 'highlight.js/lib/languages/ini'
    import dockerfile from 'highlight.js/lib/languages/dockerfile'
    import shell from 'highlight.js/lib/languages/shell'
    import Navigation from '$components/navigation.svelte'
    import { darkmode } from '$stores/darkmode'
    import { theme } from '$stores/theme'

    initializeStores()
    const drawerStore: DrawerStore = getDrawerStore()
    const toastStore: ToastStore = getToastStore()

    hljs.registerLanguage('html', html)
    hljs.registerLanguage('css', css)
    hljs.registerLanguage('js', js)
    hljs.registerLanguage('ts', ts)
    hljs.registerLanguage('json', json)
    hljs.registerLanguage('ini', ini)
    hljs.registerLanguage('dockerfile', dockerfile)
    hljs.registerLanguage('shell', shell)
    storeHighlightJs.set(hljs)

    afterNavigate((event: AfterNavigate): void => {
        const isNewPage: boolean = event.from?.url.pathname !== event.to?.url.pathname
        const elementPage: Element | null = document.querySelector('#page')

        if (isNewPage && elementPage !== null) {
            elementPage.scrollTop = 0
        }
    })

    const pageWidth: Writable<number> = writable<number>(0)
    pageWidth.subscribe((value: number): void => {
        if (value < 640) return

        drawerStore.close()
    })
</script>

<svelte:head>
    <title>PokeStuff</title>
</svelte:head>

<svelte:window bind:innerWidth={$pageWidth} />

<custom-theming-element data-theme={$theme} class={$darkmode ? 'dark' : 'light'}>
    <Drawer width="w-80 sm:w-0" bgDrawer="text-surface-900-50-token bg-surface-100-800-token">
        <button on:click={() => drawerStore.close()} class="variant-filled btn absolute right-4 top-4 px-8">Close</button>
        <Navigation />
    </Drawer>

    <Toast />

    <AppShell
        slotSidebarLeft="w-0 sm:w-80 text-surface-900-50-token bg-surface-100-800-token"
        slotPageHeader="text-surface-900-50-token bg-surface-100-800-token sticky top-0 z-10 border-l-0 sm:border-l border-surface-200-700-token"
        slotPageContent="text-surface-900-50-token bg-surface-50-900-token"
        regionPage="relative"
    >
        <!-- Sidebar -->
        <svelte:fragment slot="sidebarLeft">
            <Navigation />
        </svelte:fragment>

        <!-- Header -->
        <svelte:fragment slot="pageHeader">
            <AppBar>
                <svelte:fragment slot="lead">
                    {#if $pageWidth < 640}
                        <button class="variant-filled btn px-8" on:click={() => drawerStore.open()}>Open Sidebar</button>
                    {/if}
                </svelte:fragment>
                <div>PokeStuff</div>
            </AppBar>
        </svelte:fragment>

        <!-- Main Content -->
        <div class="p-4">
            <div class="card mx-auto max-w-5xl px-10 py-8">
                <slot />

                <!-- Footer -->
                <!--
                <div class="mt-4">
                    <hr />
                    <div class="mt-2">Hello World</div>
                </div>
                -->
            </div>
        </div>
    </AppShell>
</custom-theming-element>
