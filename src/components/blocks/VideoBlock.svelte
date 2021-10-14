<script>
    let baseUrl = "";
    export let data;

    $: {
        initializeVideo();
    }

    export function initializeVideo() {
        baseUrl = `https://enkoder-website-002.azurewebsites.net${data.body.media.publicUrl.replace('~', '')}`;
    }
</script>

<div class="bg-purple-200 text-gray-800 text-center">
    <h1 class="text-4xl text-center m-8 uppercase font-bold" >Hola VideoBlock</h1>
    {data.body.media.filename}
    <video controls src="{baseUrl}">
        <track default kind="captions" />
        Sorry, your browser doesn't support embedded videos.
    </video>
</div>