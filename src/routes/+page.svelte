<script lang="ts">
    import { CodeBlock } from "@skeletonlabs/skeleton"
</script>

<div class="card variant-ghost-warning mx-auto w-fit text-lg text-center px-16 py-4">
    <div>The Copy Button aren't working</div>
</div>

<div class="card mt-4 mx-auto max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Informations</div>
    <div>&#35; &#45;&#62; Comments</div>
    <div>&#36; &#45;&#62; Commands</div>
</div>

<div class="card mt-4 mx-auto max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Server Setup</div>
    <div class="mt-4">
        <div class="text-lg">Connect to the Server</div>
        <CodeBlock language=shell code={`ssh <username>@<ip>`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Update System Dependencies</div>
        <CodeBlock language=shell code={`$ sudo apt update && sudo apt upgrade -y`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install Git</div>
        <CodeBlock language=shell code={`$ sudo apt install git -y\n$ git -v\n  git version 2.39.2`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install NodeJS</div>
        <CodeBlock language=shell code={`$ sudo apt install curl -y\n$ curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash\n$ sudo apt install nodejs -y\n$ node -v\n  v21.6.2\n$ npm -v\n  10.2.4\n\n# PNPM Package-Manager (optional)\n$ curl -fsSL https://get.pnpm.io/install.sh | sh -\n$ source /home/cedric/.bashrc\n$ pnpm -v\n  8.15.1`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install Docker</div>
        <CodeBlock language=shell code={`$ sudo apt install ca-certificates curl -y\n$ sudo install -m 0755 -d /etc/apt/keyrings\n$ sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc\n$ sudo chmod a+r /etc/apt/keyrings/docker.asc\n$ echo \\\n\t"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \\\n\t$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\n\tsudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n$ sudo apt update\n$ sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y\n$ sudo docker run hello-world\n$ docker -v\n  Docker version 25.0.3, build 4debf41\n\n$ sudo apt install docker-compose-plugin -y\n$ docker compose version\n  Docker Compose version v2.24.6`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install MySQL</div>
        <CodeBlock language="shell" code={`$ sudo apt install mysql-server -y\n$ sudo mysql\nmysql> create user '<username>'@'localhost' identified by '<username>';\nmysql> grant all privileges on . to '<username>'@'localhost';\nmysql> exit;`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">Install Screen</div>
        <CodeBlock language=shell code={`$ sudo apt install screen -y\n$ screen -v\n  Screen version 4.09.00 (GNU) 30-Jan-22`} />
    </div>
</div>

<div class="card mt-4 mx-auto max-w-5xl px-10 py-8">
    <div class="text-3xl underline">Desktop Setup</div>
    <div class="mt-4">
        <div class="text-lg">GitHub Desktop</div>
        <CodeBlock language=shell code={`$ wget -qO - https://apt.packages.shiftkey.dev/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/shiftkey-packages.gpg > /dev/null\n$ sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/shiftkey-packages.gpg] https://apt.packages.shiftkey.dev/ubuntu/ any main" > /etc/apt/sources.list.d/shiftkey-packages.list'\n$ sudo apt update\n$ sudo apt install github-desktop -y`} />
    </div>
    <div class="mt-6">
        <div class="text-lg">VSCode</div>
        <CodeBlock language=shell code={`# File: https://code.visualstudio.com/Download\n$ sudo apt install ./<file>.deb`} />
    </div>
</div>
