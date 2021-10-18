<script context="module">
    export const prerender = true;
    export async function load({page}) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
        const response = await fetch(url);
        const data = await response.json();

        const loadedPokemon = data.results.map((data, index) => {
            return {
                name: data.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
            };
        });
        return {props: {pokemon:loadedPokemon}};
    }
</script>

<script>
    // import {pokemon} from '../stores/pokestore';
    import PokemonCard from '../components/PokemonCard.svelte';
    export let pokemon;

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        if(searchTerm) {
            filteredPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLocaleLowerCase() ));
        }else {
            filteredPokemon = [... pokemon];
        }
    }
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>
<div class="max-w-6xl mx-auto px-4">
    <h1 class="text-4xl text-center m-8 uppercase font-bold">Svelte Kit Pokedex</h1>

    <input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} type="text" placeholder="Search Pokemon">

    <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
        {#each filteredPokemon as poke}
            <PokemonCard pokemon={poke}/>
        {/each}
    </div>
</div>


