<template>
    <div class="photo-slider-area pt--100 pb--100 pt_md--70 pt_sm--50 pb_md--10 pb_sm--10 pl--100 pr_lg--0 pl_lg--0 pr_md--0 pl_md--0 pr_sm--0 pl_sm--0">
        <div class="photo-slide-wrapper">
            <div class="brook-element-carousel swiper-dot-vertical-center button-gray">
                <swiper
                    :speed="1000"
                    :loop="false"
                    :pagination="swiperOptions.pagination"
                    :effect="'fade'"
                >
                    <swiper-slide v-for="slider in sliders" :key="slider.id">
                        <div class="single-photo-slider-inner">
                            <div class="single-photo-slider">
                                <div class="image-wrapper">
                                    <nuxt-link to="">
                                        <img class="w-100" :src="slider.image" :alt="slider.heading">
                                    </nuxt-link>
                                </div>
                                <div class="text-wrapper">
                                    <div class="text">
                                        <h1 class="heading heading-h1 font-reenie">{{ slider.heading }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Pagination, EffectFade } from 'swiper/core'
    SwiperCore.use([Pagination, EffectFade ])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },

                sliders: [
                    {
                        id: 1,
                        heading: "She stared through the window at the stars.",
                        image: "/img/slider/photo-slide/photo-slide-1.jpg"
                    },
                    {
                        id: 2,
                        heading: "The spectacle before us was indeed sublime.",
                        image: "/img/slider/photo-slide/photo-slide-2.jpg"
                    },
                    {
                        id: 3,
                        heading: "The face of the moon was in shadow.",
                        image: "/img/slider/photo-slide/photo-slide-3.jpg"
                    }
                ]
            }
        }
    };
</script>
