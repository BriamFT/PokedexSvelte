<script>
    import Nav from '../components/Nav.svelte';
    import '../tailwind.css';
</script>

<Nav/>
<main class="w-screen mx-auto">
    <slot></slot>
</main>