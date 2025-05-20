<template>
    <div class="brook-testimonial-area position-relative" :class="addClass">
        <div class="container">
            <div class="row">
                <div class="col-12 pb--30">
                    <div class="brook-element-carousel">
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
                        <div class="swiper-pagination swiper-dots-bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/testimonial.json';

    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Pagination])

    export default {
        components: {
            Swiper,
            SwiperSlide,
            TestimonialItem: () => import('../TestimonialItem')
        },

        props: ["addClass"],

        data () {
            return {
                data,
                swiperOptions: {
                    spaceBetween: 20,
                    autoplay: false,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
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