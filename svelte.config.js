import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        alias: {
            $server: "./src/lib/server",
            $components: "./src/lib/components",
            $utils: "./src/lib/utils",
            $images: "./src/lib/images",
            $stores: "./src/lib/stores",
            $types: "./src/lib/types"
        }
    }
}

export default config
