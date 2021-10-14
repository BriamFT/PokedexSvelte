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
    import TextBlock from "../components/blocks/TextBlock.svelte";
    import AudioBlock from "../components/blocks/AudioBlock.svelte";
    import PageLoading from "../components/PageLoading.svelte";
    
    import { onMount } from "svelte";
    import { isSSR } from '../stores/renderstore';
    
    let components = [];
    export let blocks;
    export let blocksList = undefined;
    export let asyncBlockList = undefined;

    onMount(() => {
        if($isSSR) {
            isSSR.set(false);
        } else if(blocks instanceof Promise) {
            blocksList = async () => {
                const response = await blocks
                if(response.ok) {
                    const responseJson = await response.json();
                    return responseJson.blocks;
                } else {
                    throw new Error("Something went wrong");
                }
            }
            asyncBlockList = blocksList();
        }
    });

    function initializeBlocks(elements) {
        elements.forEach(element => {
            switch (element.type.split('.')[3]) {
                case 'HtmlBlock':
                    components = [...components, {name: HtmlBlock, props: element}];
                    break;
                case 'QuoteBlock':
                    components = [...components, {name: QuoteBlock, props: element}];
                    break;
                case 'TextBlock':
                    components = [...components, {name: TextBlock, props: element}];
                break;
                case 'AudioBlock':
                    components = [...components, {name: AudioBlock, props: element}];
                break;
            }
            
        });
    }
     
    $: {
        if($isSSR) {
            initializeBlocks(blocks);
        }
    }
</script>


<svelte:head>
    <title>Test Piranha CMS</title>
</svelte:head>

<h1 class="text-4xl text-center m-8 uppercase font-bold">Test Piranha CMS</h1>
<div class="py-4 grid gap-4 md:grid-cols-1 grid-cols-1">
    {#if asyncBlockList}
        {#await asyncBlockList}
            <PageLoading />
        {:then blocks}
            <p>CLIENT SIDE RENDERING</p>   
            {initializeBlocks(blocks)}
            {#each components as component}
                <svelte:component this={component.name} data = {component.props}/>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    {:else}
        {#if blocks}
            <p>SERVER SIDE RENDERING</p>
            {#each components as component}
                <svelte:component this={component.name} data = {component.props}/>
            {/each} 
        {/if}       
    {/if}

</div>