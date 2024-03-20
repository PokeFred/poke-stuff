<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton'
</script>

<div class="card variant-ghost-warning mx-auto w-fit px-16 py-4 text-center text-lg">
    <div>The Copy Button aren't working</div>
</div>

<div class="card mx-auto mt-4 max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Informations</div>
    <div>&#35; &#45;&#62; Comments</div>
    <div>&#36; &#45;&#62; Commands</div>
</div>

<div class="card mx-auto mt-4 max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Server Setup</div>
    <div class="mt-6">
        <div class="text-lg">Connect to the Server</div>
        <CodeBlock language="shell" code={`ssh <username>@<ip>`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Update System Dependencies</div>
        <CodeBlock language="shell" code={`$ sudo apt update && sudo apt upgrade -y`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install Git</div>
        <CodeBlock language="shell" code={`$ sudo apt install git -y\n$ git -v\n  git version 2.39.2`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install NodeJS</div>
        <CodeBlock
            language="shell"
            code={`$ sudo apt install curl -y\n$ curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash\n$ sudo apt install nodejs -y\n$ node -v\n  v21.6.2\n$ npm -v\n  10.2.4\n\n# PNPM Package-Manager (optional)\n$ curl -fsSL https://get.pnpm.io/install.sh | sh -\n$ source /home/cedric/.bashrc\n$ pnpm -v\n  8.15.1`}
        />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install Docker</div>
        <CodeBlock
            language="shell"
            code={`$ sudo apt install ca-certificates curl -y\n$ sudo install -m 0755 -d /etc/apt/keyrings\n$ sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc\n$ sudo chmod a+r /etc/apt/keyrings/docker.asc\n$ echo \\\n\t"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \\\n\t$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\n\tsudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n$ sudo apt update\n$ sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y\n$ sudo docker run hello-world\n$ docker -v\n  Docker version 25.0.3, build 4debf41\n\n$ sudo apt install docker-compose-plugin -y\n$ docker compose version\n  Docker Compose version v2.24.6`}
        />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install MySQL</div>
        <CodeBlock language="shell" code={`$ sudo apt install mysql-server -y\n$ sudo mysql\nmysql> create user '<username>'@'localhost' identified by '<username>';\nmysql> grant all privileges on . to '<username>'@'localhost';\nmysql> exit;`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install Screen</div>
        <CodeBlock language="shell" code={`$ sudo apt install screen -y\n$ screen -v\n  Screen version 4.09.00 (GNU) 30-Jan-22`} />
    </div>
</div>

<div class="card mx-auto mt-4 max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Desktop Setup</div>
    <div class="mt-6">
        <div class="text-lg">GitHub Desktop</div>
        <CodeBlock
            language="shell"
            code={`$ wget -qO - https://apt.packages.shiftkey.dev/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/shiftkey-packages.gpg > /dev/null\n$ sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/shiftkey-packages.gpg] https://apt.packages.shiftkey.dev/ubuntu/ any main" > /etc/apt/sources.list.d/shiftkey-packages.list'\n$ sudo apt update\n$ sudo apt install github-desktop -y`}
        />
    </div>
    <div class="mt-6">
        <div class="text-lg">VSCode</div>
        <CodeBlock language="shell" code={`# File: https://code.visualstudio.com/Download\n$ sudo apt install ./<file>.deb`} />
    </div>
</div>

<div class="card mx-auto mt-4 max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Requirements</div>
    <div>- NodeJS v21 [<a href="https://nodejs.org/en/download" target="_blank" class="text-tertiary-400">Link</a>] (lower versions supported too)</div>
    <div>- NPM (included in NodeJS)</div>
    <div>- Editor/Browser: VSCode (recommed free IDE) [<a href="https://code.visualstudio.com/" target="_blank" class="text-tertiary-400">Link</a>]</div>
    <div>- Browser (any browser works, but Chrome/Firefox have great DevTools for debugging)</div>
</div>

<div class="card mx-auto mt-4 max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Chapter 1 - Create a new Project</div>
    <div class="mt-6 text-lg">
        <div class="underline">Project Structure for this step</div>
        <div class="ml-0">&#x3C;root&#x3E;</div>
        <div class="ml-4">&#x2514; <b>src</b></div>
        <div class="ml-8">&#x2514; <b>routes</b></div>
        <div class="ml-12">&#x2514; +page.svelte</div>
        <div class="ml-8">&#x2502; app.d.ts</div>
        <div class="ml-8">&#x2514; app.html</div>
        <div class="ml-4">&#x2502; package.json</div>
        <div class="ml-4">&#x2502; svelte.config.js</div>
        <div class="ml-4">&#x2502; tsconfig.json</div>
        <div class="ml-4">&#x2514; vite.config.ts</div>
    </div>
    <div class="mt-6">
        <div class="text-lg">&#x3C;root&#x3E;/package.json</div>
        <CodeBlock language="json" code={`{\n    "name": "test-project",\n    "version": "0.0.0",\n    "type": "module",\n    "private": true,\n    "scripts": {\n        "dev": "vite dev",\n        "build": "vite build",\n        "preview": "vite preview",\n    },\n    "devDependencies": {\n        "@sveltejs/adapter-auto": "^3.1.1",\n        "@sveltejs/kit": "^2.5.4",\n        "@sveltejs/vite-plugin-svelte": "^3.0.2",\n        "svelte": "^4.2.12",\n        "tslib": "^2.6.2",\n        "typescript": "^5.4.3",\n        "vite": "^5.2.2"\n    }\n}`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">&#x3C;root&#x3E;/vite.config.ts</div>
        <CodeBlock language="ts" code={`import { defineConfig } from "vite"\nimport { sveltekit } from "@sveltejs/kit/vite"\n\nexport default defineConfig({\n    plugins: [sveltekit()]\n})`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">&#x3C;root&#x3E;/svelte.config.js</div>
        <CodeBlock language="js" code={`import adapter from "@sveltejs/adapter-auto"\nimport { vitePreprocess } from "@sveltejs/vite-plugin-svelte"\n\n/** @type {import('@sveltejs/kit').Config} */\nconst config = {\npreprocess: vitePreprocess(),\n    kit: {\n        adapter: adapter()\n    }\n}\n\nexport default config`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">&#x3C;root&#x3E;/tsconfig.json</div>
        <CodeBlock language="json" code={`{\n    "extends": "./.svelte-kit/tsconfig.json",\n    "compilerOptions": {\n        "allowJs": true,\n        "checkJs": true,\n        "esModuleInterop": true,"\n        forceConsistentCasingInFileNames": true,\n        "resolveJsonModule": true,\n        "skipLibCheck": true,\n        "sourceMap": true,\n        "strict": true,\n        "moduleResolution": "bundler"\n    }\n}`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">&#x3C;root&#x3E;/src/app.d.ts</div>
        <CodeBlock language="ts" code={`declare global {\n    namespace App {}\n}\n\nexport {}`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">&#x3C;root&#x3E;/src/app.html</div>
        <CodeBlock language="html" code={`<!doctype html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="icon" href="%sveltekit.assets%/favicon.png" />\n        %sveltekit.head%\n    </head>\n    <body data-sveltekit-preload-data="hover">\n        <div style="display: contents">%sveltekit.body%</div>\n    </body>\n</html>`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">&#x3C;root&#x3E;/src/routes/+page.svelte</div>
        <CodeBlock language="html" code={`<div>Hello World</div>`} />
    </div>
    <div class="mt-6">
        <div class="text-lg"></div>
        <CodeBlock language="typescript" code={``} />
    </div>
</div>
