<script>
    import { base } from '$app/paths';
    let routes = [
        {endpoint: `${base}/`, label: 'Home'},
        {endpoint: `${base}/pokedex`, label: 'Pokedex'},
        {endpoint: `${base}/about`, label: 'About'},
    ]
</script>

<nav class="flex justify-center w-full mt-6">
    {#each routes as element}
        <a class="mx-4 text-lg" href="{element.endpoint}">{element.label}</a>
    {/each}
</nav>