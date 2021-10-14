<script>
    let baseUrl = "";
    export let data;

    $: {
        initializeAudio();
    }

    export function initializeAudio() {
        baseUrl = `https://enkoder-website-002.azurewebsites.net${data.body.media.publicUrl.replace('~', '')}`;
    }
</script>

<div class="bg-purple-200 text-gray-800 text-center">
    <h1 class="text-4xl text-center m-8 uppercase font-bold" >Hola AudioBlock</h1>
    {data.body.media.filename}
    <audio controls>
        <source src="{baseUrl}" type={data.body.media.contentType}>
        Your browser does not support the <code>audio</code> element.
    </audio>
</div>
