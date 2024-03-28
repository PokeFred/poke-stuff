<script>
    import { goto } from '$app/navigation'
</script>

<nav class="list-nav p-4">
    <h2 class="p-4">Links</h2>
    <hr />
    <ul class="mt-2">
        <li><button on:click={() => goto('/')}>Home</button></li>
        <li><button on:click={() => goto('/old')}>Old</button></li>
    </ul>
    <h2 class="mt-4 p-4">Chapter</h2>
    <hr />
    <ul class="mt-2">
        <li><button on:click={() => goto('/chapter/x-x-setup-deployment-server')}>x.x Setup Deployment Server</button></li>
    </ul>
</nav>
