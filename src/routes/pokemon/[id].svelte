<script context="module">
    export const prerender = true;
    export async function load({page}) {
        const id = page.params.id;

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(url);
        const pokemon = await response.json();
        return {props: {pokemon}};
    }
</script>

<script>
    export let pokemon;
    const types = `${pokemon.types[0].type.name} ${(pokemon.types[1])? pokemon.types[1].type.name : "" }`;
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
    <p>Type: <strong>{types}</strong> | Height: <strong>{pokemon.height}</strong> | Weight: <strong>{pokemon.weight}</strong></p>
    <img class="card-image h-40 w-40" src={pokemon.sprites['front_default']} alt={pokemon.name}>
</div>