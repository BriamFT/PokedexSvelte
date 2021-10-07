<script>
    let routes = [
        {endpoint: '/', label: 'Home'},
        {endpoint: '/pokedex', label: 'Pokedex'},
        {endpoint: '/about', label: 'About'},
    ]
</script>

<nav class="flex justify-center w-full mt-6">
    {#each routes as element}
        <a class="mx-4 text-lg" href="{element.endpoint}">{element.label}</a>
    {/each}
</nav>