<script context="module">
    import commonPagesPreloader from "../preloaders/common-pages";
    export const prerender = true;
    export async function load({page}) {
        console.log('LOAD FUNCTION');
        return {props: commonPagesPreloader.call(this, page.path)}
    }
</script>

<script>
    import PageLoading from "../components/PageLoading.svelte";
    import Render from "../components/Render.svelte";
    
    import { onMount } from "svelte";
    import { isSSR } from '../stores/renderstore';
    
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
            <Render blocks={blocks}/>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    {:else}
        {#if blocks}  
            <p>SERVER SIDE RENDERING</p> 
            <Render blocks={blocks}/>
        {/if}       
    {/if}
</div>