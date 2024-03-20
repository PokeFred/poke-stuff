/** @type {import("prettier").Config} */
const config = {
    printWidth: 255,
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: ["*.js", "*.ts", "*.d.ts", "*.svelte"],
            options: {
                semi: false,
                singleQuote: true,
                quoteProps: "preserve",
                trailingComma: "all",
                bracketSpacing: true,
                arrowParens: "always",
            },
        },
        {
            files: ["*.svelte"],
            options: {
                bracketSameLine: false,

                // prettier-plugin-svelte stuff
                parser: "svelte",
                svelteSortOrder: "options-scripts-markup-styles",
                svelteStrictMode: false,
                svelteAllowShorthand: false,
                svelteIndentScriptAndStyle: true,
            },
        },
    ],
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
}

export default config
