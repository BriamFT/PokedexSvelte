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
    export let data;
    console.log(data.id);
</script>


<svelte:head>
    <title>Test Piranha CMS</title>
</svelte:head>

<h1 class="text-4xl text-center m-8 uppercase font-bold">Test Piranha CMS</h1>
<div>
    {@html data.blocks[0].body.value}
</div>
