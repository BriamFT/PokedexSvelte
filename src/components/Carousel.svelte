<script>
    import Akky from '../images/akky-logo.jpg'
    import HomeDepot from '../images/home-depot-logo.jpg'
    import Neoris from '../images/neoris-logo.jpg'
    import Pulse from '../images/pulse-logo.jpg'
    import Semex from '../images/semex-logo.jpg'
    import Sigma from '../images/sigma-alimentos-logo.jpg'
    import Teleperformance from '../images/teleperformance-logo.jpg'
    import TheMoneyTeam from '../images/the-money-team-logo.jpg'
    import Indigo from '../images/indigo-beam-logo.jpg'

    // Import Swiper Svelte components
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/css';
    import "swiper/css/pagination"
    import "swiper/css/navigation"

    // import Swiper core and required modules
    import SwiperCore, {
    Autoplay,Pagination,Navigation
    } from 'swiper';

    // install Swiper modules
    SwiperCore.use([Autoplay,Pagination,Navigation]);

    export let title;
</script>
<div class="py-12 max-w-4xl mx-auto text-center">
    <h1 class="text-text-color-dark text-xl font-bold">{title}</h1>
    <Swiper
        slidesPerView="{3}" 
        spaceBetween="{30}" 
        slidesPerGroup="{3}"
        loop="{true}" 
        loopFillGroupWithBlank="{true}" 
        pagination="{true}"
        autoplay='{{
            "delay": 2500,
        }}'
        breakpoints='{{
            "0": {
                "slidesPerView":1,
                "slidesPerGroup": 1,
                "spaceBetween": 20
            },
            "768": {
                "slidesPerGroup":2,
                "slidesPerView": 2,
                "spaceBetween": 40
            },
            "1024": {
                "slidesPerGroup":3,
                "slidesPerView": 3,
                "spaceBetween": 50
            }
        }}'
        on:swiper={(e) => console.log(e.detail[0])}
        on:slideChange={() => console.log('slide change')}
    >

        <SwiperSlide><img src="{HomeDepot}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{Akky}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{Neoris}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{Pulse}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{Semex}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{Sigma}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{Teleperformance}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{TheMoneyTeam}" alt=""></SwiperSlide>
        <SwiperSlide><img src="{Indigo}" alt=""></SwiperSlide>
    </Swiper>

</div>    
