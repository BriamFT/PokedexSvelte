<script>
    export let data;
    console.log(data);
</script>

<div class="bg-gray-100 text-gray-800 text-center my-10 border-blue-600">
    <h1 class="text-4xl text-center m-8 uppercase font-bold">Hola QuoteBlock</h1>
    <blockquote>
        <p>{data.body.value}</p>
        <footer>
            {data.author.value}
        </footer>
    </blockquote>
</div>