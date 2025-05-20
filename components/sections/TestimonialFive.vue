<template>
    <div class="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 poss_relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="brook-section-title text-center mb--70">
                        <h6 class="heading headin-h6 letter-spacing-3 theme-color">TESTIMONIALS</h6>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="testimonial-wrapper testimonial-active--single--arrow wow move-up">
                        <div class="testimonial-container">
                            <div class="testimonial testimonial--creative">
                                <div class="brook-element-carousel nav-content testimonial-nav-content testimonial-content--2">
                                    <swiper
                                        :space-between="30"
                                        :speed="1000"
                                    >
                                        <!-- Start Single COntent -->
                                        <swiper-slide class="testimonial-nav">
                                            <div class="testimonial-nav-style">
                                                <div class="clint-thumb">
                                                    <img src="/img/testimonial/clint-3/avata-02.png" alt="testimonial images">
                                                </div>
                                            </div>
                                            <div class="content">
                                                <p>You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself.</p>
                                                <ul class="rating d-flex justify-content-center">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <div class="testimonial-info">
                                                    <div class="clint-info">
                                                        <h6>Harley Mills</h6>
                                                        <span>- MMs Agency</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                        <!-- End Single COntent -->

                                        <!-- Start Single COntent -->
                                        <swiper-slide class="testimonial-nav">
                                            <div class="testimonial-nav-style">
                                                <div class="clint-thumb">
                                                    <img src="/img/testimonial/clint-3/avata-03.png" alt="testimonial images">
                                                </div>
                                            </div>
                                            <div class="content">
                                                <p>Nipa You can’t succeed if you just do what others do and follow the well-worn path. You need tocreate a new and original path for yourself.</p>
                                                <ul class="rating d-flex justify-content-center">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <div class="testimonial-info">
                                                    <div class="clint-info">
                                                        <h6>Harley Mills</h6>
                                                        <span>- PR Officer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                        <!-- End Single COntent -->
                                    </swiper>
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
    import { Swiper, SwiperSlide } from 'swiper/vue'

    export default {
        components: {
            Swiper,
            SwiperSlide,
        }
    };
</script>