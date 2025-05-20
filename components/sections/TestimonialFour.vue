<template>
    <div class="brook-testimonial-area ptb--100 ptb-md--80 ptb-sm--60 bg_image--5" :style="{ backgroundImage: `url('/img/bg/bg-image-5.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial-wrapper testimonial-active--single--arrow wow move-up">
                        <div class="testimonial-container pb--30">
                            <!-- Start Single Testimonial -->
                            <div class="testimonial testimonial--creative">
                                <div class="brook-element-carousel nav-content testimonial-nav-content">
                                    <swiper
                                        :space-between="30"
                                        :speed="1000"
                                    >
                                        <!-- Start Single COntent -->
                                        <swiper-slide class="testimonial-nav">
                                            <div class="testimonial-nav-style">
                                                <div class="clint-thumb">
                                                    <img src="/img/testimonial/clint-3/avata-01.png" alt="testimonial images">
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
                                                    <img src="/img/testimonial/clint-3/avata-02.png" alt="testimonial images">
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

                                        <!-- Start Single COntent -->
                                        <swiper-slide class="testimonial-nav">
                                            <div class="testimonial-nav-style">
                                                <div class="clint-thumb">
                                                    <img src="/img/testimonial/clint-3/avata-03.png" alt="testimonial images">
                                                </div>
                                            </div>
                                            <div class="content">
                                                <p>Designing is not intended for talented people. It’s for everyone. What you need to do is just to open up your mind to all possibilities.</p>
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
                            <!-- End Single Testimonial -->
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