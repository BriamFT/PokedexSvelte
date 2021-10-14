<script>
    import { onMount } from "svelte";

    import HtmlBlock from "../components/blocks/HtmlBlock.svelte";
    import QuoteBlock from "../components/blocks/QuoteBlock.svelte";
    import TextBlock from "../components/blocks/TextBlock.svelte";
    import AudioBlock from "../components/blocks/AudioBlock.svelte";
    import ImageBlock from "../components/blocks/ImageBlock.svelte";
    import VideoBlock from "../components/blocks/VideoBlock.svelte";

    let components = [];
    const BLOCKS_DEFINITION = {
        'HtmlBlock': HtmlBlock,
        'QuoteBlock': QuoteBlock,
        'TextBlock': TextBlock,
        'AudioBlock': AudioBlock,
        'ImageBlock': ImageBlock,
        'VideoBlock': VideoBlock
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