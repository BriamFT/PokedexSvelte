<script>
    import Nav from '../components/Nav.svelte';
</script>

<Nav/>
<main class="p-4 max-w-6xl mx-auto">
    <slot></slot>
</main>



<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>