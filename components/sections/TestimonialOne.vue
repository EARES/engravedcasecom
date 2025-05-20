<template>
    <div class="bk-testimonial-area section-ptb-xl pt-0 bg_color--5 poss_relative pt_sm--0">
        <div class="container section-pt-xl">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center wow move-up">
                        <h3 class="theme-color">{{ data.sectionSubTitle }}</h3>
                        <h2>{{ data.sectionTitle }}</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="testimonial-wrapper testimonial--horizontal testimonial--horizontal--active pagination-style-01 mt--80 wow move-up">
            <div class="testimonial-container">
                <swiper
                    :space-between="30"
                    :speed="1000"
                    :loop="false"
                    :breakpoints="swiperOptions.breakpoints"
                    :pagination="swiperOptions.pagination"
                >
                    <swiper-slide v-for="testimonial in data.testimonials" :key="testimonial.id">
                        <TestimonialItem :testimonial="testimonial" />
                    </swiper-slide>
                </swiper>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-custom"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import TestimonialItem from "../TestimonialItem"
    import data from '../../data/testimonial.json';

    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Pagination])

    export default {
        components: {
            Swiper,
            SwiperSlide,
            TestimonialItem
        },

        data () {
            return {
                data,
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        renderCustom: function (e, t, i) {
                            var a = (100 / i) * t;
                            return a = a.toFixed(6), '<div class="progressbar"><div class="filled" data-width="' + a + '" style="width: ' + a + "%" + '"></div></div>'
                        }
                    },
                    breakpoints: {
                        1499:{
                            slidesPerView : 5
                        },
                        992:{
                            slidesPerView : 3
                        },
                        576:{
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