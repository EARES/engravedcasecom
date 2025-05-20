<template>
    <div class="brook-hero-number-slider-area position-relative">
        <div class="brook-element-carousel number-dot">
            <swiper
                :speed="1000"
                :loop="false"
                :pagination="swiperOptions.pagination"
                :effect="'fade'"
            >
                <swiper-slide v-for="slider in sliders" :key="slider.id">
                    <div class="hero-item bg-image" :style="{ backgroundImage: `url(${slider.bgImage})` }">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hero-content-2 center">
                                        <h3>{{ slider.heading }}</h3>
                                        <nuxt-link to="/about-us-01" class="bk-btn theme-btn">Explore Now</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
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
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                },

                sliders: [
                    {
                        id: 1,
                        heading: "Bringing the best digital solutions for your brands",
                        bgImage: "/img/slider/digital-agency-slide-01.jpg"
                    },
                    {
                        id: 2,
                        heading: "Bringing the best digital solutions for your brands",
                        bgImage: "/img/slider/digital-agency-slide-02.jpg"
                    },
                    {
                        id: 3,
                        heading: "Bringing the best digital solutions for your brands",
                        bgImage: "/img/slider/digital-agency-slide-03.jpg"
                    }
                ]
            }
        }
    };
</script>