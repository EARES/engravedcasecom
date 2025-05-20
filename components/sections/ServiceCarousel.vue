<template>
    <div class="bk-about-area pt--150 pb--70 pt_md--80 pt_sm--60 pb_md--80 pb_sm--80 bg-svg--1 swiper-arrow-hover">
        <!-- Separator start -->
        <div class="vc_row-separator square">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="90px" fill="#eeeeee" height="90px" viewBox="0 0 100 100"
                preserveAspectRatio="none">
                <rect x="33.3333%" y="0" width="66.6667" height="66.6667"></rect>
                <rect x="0" y="66.6667%" width="33.3333%" height="33.3333%"></rect>
            </svg>
        </div>
        <!-- Separator end -->

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center">
                        <h2 class="heading heading-h2 heading-font">We're always ready for challenges.</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 mt--80">
                    <div class="brook-element-carousel wow move-up">
                        <swiper
                            :speed="1000"
                            :loop="false"
                            :space-between="20"
                            :breakpoints="swiperOptions.breakpoints"
                            :navigation="swiperOptions.navigation"
                        >
                            <swiper-slide class="service service--3 hover-theme-color" v-for="service in data.services.slice(12, 16)" :key="service.id">
                                <div class="thumb">
                                    <nuxt-link to="/services-classic">
                                        <img :src="service.image" alt="service images">
                                    </nuxt-link>
                                </div>
                                <div class="content">
                                    <h3>
                                        <nuxt-link to="/services-classic">{{ service.heading }}</nuxt-link>
                                    </h3>
                                    <p>{{ service.desc }}</p>
                                </div>
                            </swiper-slide>
                        </swiper>

                        <!-- slider arrow navigation -->
                        <div class="ht-swiper-button ht-swiper-button-prev">
                            <i class="ion ion-ios-arrow-back"></i>
                        </div>
                        <div class="ht-swiper-button ht-swiper-button-next">
                            <i class="ion ion-ios-arrow-forward"></i>
                        </div>
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

    import data from '../../data/service.json';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                data,
                swiperOptions: {
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },
                        768:{
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