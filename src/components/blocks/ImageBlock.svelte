<script>
    let baseUrl = "";
    export let data;

    $: {
        initializeImage();
    }

    export function initializeImage() {
        baseUrl = `https://enkoder-website-002.azurewebsites.net${data.body.media.publicUrl.replace('~', '')}`;
    }
</script>

<div class="bg-purple-200 text-gray-800 text-center">
    <h1 class="text-4xl text-center m-8 uppercase font-bold" >Hola ImageBlock</h1>
    {data.body.media.filename}
    <img src="{baseUrl}" alt="{data.body.media.filename}">
</div>