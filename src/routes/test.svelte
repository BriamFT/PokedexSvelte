<script context="module">
    export const prerender = true;
    export async function load() {
        const url = `https://enkoder-website-002.azurewebsites.net/api/page/test`;
        const response = await fetch(url)
        const data = await response.json();
        return {props: {data}};
    }
</script>

<script>
    import HtmlBlock from "../components/blocks/HtmlBlock.svelte";
    import QuoteBlock from "../components/blocks/QuoteBlock.svelte";
    export let data;
    
    let components = [];
    $: {
        data.blocks.forEach(element => {
            switch (element.type.split('.')[3]) {
                case 'HtmlBlock':
                    components = [...components, {name: HtmlBlock, props: element}];
                    break;
                case 'QuoteBlock':
                    components = [...components, {name: QuoteBlock, props: element}];
                    break;
            }

        });
    }
</script>


<svelte:head>
    <title>Test Piranha CMS</title>
</svelte:head>

<h1 class="text-4xl text-center m-8 uppercase font-bold">Test Piranha CMS</h1>
<div class="py-4 grid gap-4 md:grid-cols-1 grid-cols-1">
    {#each components as component}
        <svelte:component this={component.name} data = {component.props}/>
    {/each}
  
</div>
