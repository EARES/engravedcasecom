<template>
    <div class="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--60 bg_image--60" :style="{ backgroundImage:`url('/img/bg/bg-image-60.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="brook-section-title text-center mb--70">
                        <h6 class="heading-13 theme-color text-uppercase fw-500">TESTIMONIALS</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="testimonial-wrapper">
                        <div class="testimonial-container pb--30">
                            <div class="testimonial testimonial--creative position-relative">
                                <div class="brook-element-carousel nav-content">
                                    <swiper
                                        :space-between="30"
                                        :speed="1000"
                                        :pagination="swiperOptions.pagination"
                                    >
                                        <swiper-slide class="testimonial testimonial_style--4" v-for="testimonial in testimonials" :key="testimonial.id">
                                            <div class="content">
                                                <p>{{ testimonial.text }}</p>
                                                <div class="testimonial-info">
                                                    <div class="post-thumbnail">
                                                        <img :src="testimonial.thumb" :alt="testimonial.alt">
                                                    </div>
                                                    <div class="clint-info">
                                                        <h6>{{ testimonial.name }}</h6>
                                                        <span>{{ testimonial.position }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    </swiper>
                                    <!-- add pagination -->
                                    <div class="swiper-pagination swiper-dots-bottom essential-testimonial"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Pagination])

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

                testimonials: [
                    {
                        "id": 1,
                        "name": "Uzzal Hossain",
                        "position": "PR Officer",
                        "thumb": "/img/testimonial/clint-1/clint-3.jpg",
                        "alt": "client image",
                        "text": "Designing is not intended for talented people. It’s for everyone. What you need to do is just to open up your mind to all possibilities."
                    },
                    {
                        "id": 2,
                        "name": "Yeasin Rony",
                        "position": "PR Officer",
                        "thumb": "/img/testimonial/clint-1/clint-3.jpg",
                        "alt": "client image",
                        "text": "Never stop learning. Consider yourself as a life-long learner and try your best to learn as much as you can, you definitely will succeed."
                    },
                    {
                        "id": 3,
                        "name": "Raju Ahammad",
                        "position": "PR Officer",
                        "thumb": "/img/testimonial/clint-1/clint-3.jpg",
                        "alt": "client image",
                        "text": "You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself."
                    }
                ]
            }
        }
    };
</script>

<style>
    .essential-testimonial {
        bottom: -50px !important;
    }
</style>