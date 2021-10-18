<script>
    import Carousel from '../components/Carousel.svelte';
    import Fold from '../components/home/fold.svelte';
    import pokemonLogo from '../images/logo-pokemon.png';
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>
<!-- <h1 class="text-4xl text-center m-8 uppercase font-bold">Svelte Kit Pokedex</h1>

<div class="max-w-6xl mx-auto flex flex-col items-center">
    <figure >
        <img class="w-1/2 h-1/2 mx-auto" alt="Pokemon Logo" src="{pokemonLogo}">
    </figure>
    
    <p class="">Created by <strong>Briam Flores</strong></p>
</div> -->
<Fold/>
<Carousel title={'COMPANIES THAT TRUST OUR WORK'}/>

