<script>
    import Nav from '../components/Nav.svelte';
    // import '../tailwind.css';
</script>

<Nav/>
<main class="w-screen mx-auto">
    <slot></slot>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .swiper-slide {
        @apply flex justify-center items-center bg-white;
    }

    .swiper-slide img {
        height: 50%;
    }

    .swiper-pagination {
        bottom: 0px !important;
    }

    @layer base {
        body {
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        }

        b {
            color: #FE8104;
        }

        .swiper {
            width: 100%;
            height: 150px;
            /* background-color:gray; */
        }
    }

    @layer utilities {
        .h-500 {
            height: 500px;
        }
    }
</style>