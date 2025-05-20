<template>
    <main class="page-content left-vertical-header">
        <div class="brook-slider-area">
            <div class="fullscreen-slider-activation swiper-dot-vertical-center">
                <div class="brook-element-carousel">
                    <swiper
                        :speed="1000"
                        :loop="true"
                        :pagination="swiperOptions.pagination"
                        :mousewheel= "true"
                        :direction= "vertical"
                    >
                        <swiper-slide v-for="slider in sliders" :key="slider.id">
                            <div class="slide-portfolio-single fullscreen d-flex align-items-center bg_image--29" :style="{ backgroundImage: `url(${slider.bgImage})` }">
                                <div class="content">
                                    <h5 class="heading heading-h5 text-white">{{ slider.category }}</h5>
                                    <h2 class="heading heading-h2 text-white">
                                        <nuxt-link :to="slider.btnUrl">{{ slider.heading }}</nuxt-link>
                                    </h2>
                                    <div class="slide-btn">
                                        <nuxt-link :to="slider.btnUrl" class="brook-btn bk-btn-white-border btn-sd-size btn-rounded space-between">View Project</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    
                    <!-- Add Pagination -->
                    <div class="swiper-pagination horizontal-pagination"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Pagination } from 'swiper/core'
    SwiperCore.use([Pagination ])

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
                        category: "Digital",
                        heading: "Enchanting Portrait Hacks",
                        btnUrl: "/portfolio/portfolio-details",
                        bgImage: "/img/bg/bg-image-29.jpg"
                    },
                    {
                        id: 2,
                        category: "Marketing",
                        heading: "Graphic Design Decoding",
                        btnUrl: "/portfolio/portfolio-details",
                        bgImage: "/img/bg/bg-image-30.jpg"
                    },
                    {
                        id: 3,
                        category: "Design",
                        heading: "Graphic Design Decoding",
                        btnUrl: "/portfolio/portfolio-details",
                        bgImage: "/img/bg/bg-image-31.jpg"
                    },
                    {
                        id: 4,
                        category: "Photography",
                        heading: "Enchanting Portrait Hacks",
                        btnUrl: "/portfolio/portfolio-details",
                        bgImage: "/img/bg/bg-image-32.jpg"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">
.fullscreen-slider-activation {
    .swiper-wrapper {
        max-height: 100vh;
    }
}
</style>