export async function get() {
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
    return {
        status: 200,
        body: loadedPokemon
    }
}