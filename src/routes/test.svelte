<script context="module">
    import commonPagesPreloader from "../preloaders/common-pages";
    export const prerender = true;
    export async function load({page}) {
        console.log('LOAD FUNCTION');
        return {props: commonPagesPreloader.call(this, page.path)}
    }
</script>

<script>
    import HtmlBlock from "../components/blocks/HtmlBlock.svelte";
    import QuoteBlock from "../components/blocks/QuoteBlock.svelte";
    
    let components = [];
    
    export let blocks;
    export function initializeBlocks(elements) {
        elements.forEach(element => {
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
     
    $: {
        initializeBlocks(blocks);
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
