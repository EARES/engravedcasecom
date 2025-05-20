<template>
    <div class="brook-portfolio-slide">
        <div class="portfolio-slide-activation swiper-dot-vertical-center">
            <swiper
                :speed="1000"
                :pagination="swiperOptions.pagination"
                :effect="'fade'"
            >
                <swiper-slide class="single-portfolio-slide pl--100 plr_sm--10 pl_md--50" v-for="slide in sliders" :key="slide.id">
                    <div class="fullscreen d-flex align-items-center bg_image--45" :style="{ backgroundImage: `url(${slide.coverImage})` }">
                        <div class="inner">
                            <div class="info">
                                <h3 class="heading heading-h3 text-white">
                                    <nuxt-link to="/portfolio/portfolio-details">
                                        {{ slide.title }}
                                    </nuxt-link>
                                </h3>
                                <div class="category">
                                    <nuxt-link to="/portfolio/portfolio-details">{{ slide.category }}</nuxt-link>
                                </div>
                                <div class="slide-btn">
                                    <nuxt-link to="/portfolio/portfolio-details">View Project</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <div class="swiper-pagination horizontal-pagination"></div>
            <!-- Add Pagination -->
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

                sliders:[
                    {
                        id: 1,
                        title: "B-sharp High-end Audio",
                        category: "Design",
                        coverImage: "/img/bg/bg-image-45.jpg"
                    },
                    {
                        id: 2,
                        title: "Enchanting Portrait Hacks",
                        category: "Digital",
                        coverImage: "/img/bg/bg-image-46.jpg"
                    },
                    {
                        id: 3,
                        title: "Digital Marketing Basics",
                        category: "Design",
                        coverImage: "/img/bg/bg-image-47.jpg"
                    },
                    {
                        id: 4,
                        title: "Measure Digital Progress",
                        category: "Life Style",
                        coverImage: "/img/bg/bg-image-48.jpg"
                    },
                    {
                        id: 5,
                        title: "Graphic Design Decoding",
                        category: "Digital",
                        coverImage: "/img/bg/bg-image-46.jpg"
                    },
                ]
            }
        },
    };
</script>

<style lang="scss">
    .horizontal-pagination {
        width: auto !important;
        left: auto !important;
        .swiper-pagination-bullet {
            margin: 12px 0 !important;
        }
    }
</style>