<template>
    <div class="bk-carousel-slider bg_color--1 ptb--150 ptb-md--80 ptb-sm--60 swiper-arrow-hover">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-element-carousel flexable-arrow flexable-dots">
                        <swiper
                            :speed="1000"
                            :space-between="30"
                            :breakpoints="swiperOptions.breakpoints"
                            :navigation="swiperOptions.navigation"
                        >
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/carousel/cat2-md-1.jpg" alt="image">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/carousel/cat2-md-2.jpg" alt="image">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/carousel/cat2-md-3.jpg" alt="image">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/carousel/cat2-md-4.jpg" alt="image">
                                </div>
                            </swiper-slide>
                            <!-- slider arrow navigation -->
                            <div class="ht-swiper-button ht-swiper-button-prev swiper-arrow-center">
                                <i class="fas fa-angle-left"></i>
                            </div>
                            <div class="ht-swiper-button ht-swiper-button-next swiper-arrow-center">
                                <i class="fas fa-angle-right"></i>
                            </div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Navigation } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Navigation])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                    breakpoints: {
                        768:{
                            slidesPerView : 3
                        },
                        480:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }
    };
</script>