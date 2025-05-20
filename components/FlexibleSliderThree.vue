<template>
    <div class="flexale-image ptb--150 section-separator-with--border ptb-md--80 ptb-sm--60 swiper-arrow-hover">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-element-carousel flexable-arrow flexable-dots position-relative">
                        <swiper
                            :speed="1000"
                            :loop="false"
                            :space-between="30"
                            :navigation="swiperOptions.navigation"
                            :pagination="swiperOptions.pagination"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-5.jpg" alt="image">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-1.jpg" alt="image">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-2.jpg" alt="image">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-3.jpg" alt="image">
                                </div>
                            </swiper-slide>
                        </swiper>

                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-dots-bottom"></div>

                        <!-- slider arrow navigation -->
                        <div class="ht-swiper-button ht-swiper-button-prev swiper-arrow-center">
                            <i class="fas fa-angle-left"></i>
                        </div>
                        <div class="ht-swiper-button ht-swiper-button-next swiper-arrow-center">
                            <i class="fas fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Navigation, Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Navigation, Pagination])

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
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        768:{
                            slidesPerView : 3
                        },

                        480:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    };
</script>