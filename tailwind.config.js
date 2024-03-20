import { skeleton } from '@skeletonlabs/tw-plugin'
import forms from '@tailwindcss/forms'
import { join as joinPath } from 'path'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/app.html', './src/routes/**/*.svelte', './src/lib/components/**/*.svelte', joinPath(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,svelte,js,ts}')],
    theme: {
        extend: {},
    },
    plugins: [
        skeleton({
            themes: {
                preset: ['skeleton'],
            },
        }),
        forms,
    ],
}
