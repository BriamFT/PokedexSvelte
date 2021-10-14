<script>
    import { onMount } from "svelte";

    import HtmlBlock from "../components/blocks/HtmlBlock.svelte";
    import QuoteBlock from "../components/blocks/QuoteBlock.svelte";
    import TextBlock from "../components/blocks/TextBlock.svelte";
    import AudioBlock from "../components/blocks/AudioBlock.svelte";

    let components = [];
    const BLOCKS_DEFINITION = {
        'HtmlBlock': HtmlBlock,
        'QuoteBlock': QuoteBlock,
        'TextBlock': TextBlock,
        'AudioBlock': AudioBlock
    }
    export let blocks

    onMount(() => {
        initializeBlocks(blocks)
    });

    function initializeBlocks(elements) {
        if(!(elements instanceof Promise)){
            elements.forEach(element => {
                let nameBlock = element.type.split('.')[3]
                components = [...components, {name: BLOCKS_DEFINITION[nameBlock], props: element}];
            });
        }
        
    }
</script>


{#each components as component}
    <svelte:component this={component.name} data = {component.props}/>
{/each}