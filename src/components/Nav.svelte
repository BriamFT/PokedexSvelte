<script>
    import Enkoder from '../images/enkoder.png'
    let routes = [
        {endpoint: `/`, label: 'Home'},
        {endpoint: `/pokedex`, label: 'Pokedex'},
        {endpoint: `/test`, label: 'Test'},
        {endpoint: `/about`, label: 'About'},
    ]
    
    let hidden = true;
</script>

<nav class="flex items-center justify-between flex-wrap bg-gray-lighter p-6">
    <div>
        <img src={Enkoder} alt="Enkoder Logo" width="175" height="40">
    </div>
    <div class="block lg:hidden">
        <button id='boton' class="flex items-center px-3 py-2 border rounded text-teal-200" on:click={() => hidden=!hidden}>
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>

    <div id='menu' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:mx-10" class:hidden>
        <div class="text-sm lg:flex-grow">
            {#each routes as element}
                <a class="block mt-4 lg:inline-block lg:mt-0 text-text-color mr-4" href="{element. endpoint}">{element.label}</a>
            {/each}
        </div>
    </div>
</nav>