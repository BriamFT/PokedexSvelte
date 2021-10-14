<script>
    export let data;
</script>

<div class="bg-purple-200 text-gray-800 text-center">
    <h1 class="text-4xl text-center m-8 uppercase font-bold" >Hola AudioBlock</h1>
    {data.body.media.filename}
    <audio controls>
        <source src="https://enkoder-website-002.azurewebsites.net/uploads/52855704-7161-4339-b15c-85c91866b58b/RISE.mp3" type={data.body.media.contentType}>
        Your browser does not support the <code>audio</code> element.
    </audio>
</div>
