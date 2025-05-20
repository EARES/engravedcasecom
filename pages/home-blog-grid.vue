<template>
    <div class="main-wrapper">
        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="hero-blog-grid">
            <div class="hero-blog-grid-active swiper-arrow-hover">
                <swiper
                    :speed="1000"
                    :loop="true"
                    :space-between="30"
                    :centered-slides="true"
                    :breakpoints="swiperOptions.breakpoints"
                    :navigation="swiperOptions.navigation"
                >
                    <swiper-slide>
                        <div class="hero-blog-grid-item bg-cover" :style="{ backgroundImage: `url('/img/blog/slider/post-carousel-01.jpg')` }">
                            <div class="hero-blog-grid-content">
                                <div class="post-inner text-center">
                                    <h2 class="heading heading-h5">
                                        <nuxt-link to="/blog/blog-details">Healthy Eating With Fruit And Vegetables</nuxt-link>
                                    </h2>
                                    <div class="post-meta">
                                        <div class="post-date">12.03.2020</div>
                                        <div class="post-category">
                                            <nuxt-link to="/blog/blog-grid-modern">life style</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="hero-blog-grid-item bg-cover" :style="{ backgroundImage: `url('/img/blog/slider/post-carousel-02.jpg')` }">
                            <div class="hero-blog-grid-content">
                                <div class="post-inner text-center">
                                    <h2 class="heading heading-h5">
                                        <nuxt-link to="/blog/blog-details">Healthy Eating With Fruit And Vegetables</nuxt-link>
                                    </h2>
                                    <div class="post-meta">
                                        <div class="post-date">12.03.2020</div>
                                        <div class="post-category">
                                            <nuxt-link to="/blog/blog-grid-modern">life style</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="hero-blog-grid-item bg-cover" :style="{ backgroundImage: `url('/img/blog/slider/post-carousel-03.jpg')` }">
                            <div class="hero-blog-grid-content">
                                <div class="post-inner text-center">
                                    <h2 class="heading heading-h5">
                                        <nuxt-link to="/blog/blog-details">Healthy Eating With Fruit And Vegetables</nuxt-link>
                                    </h2>
                                    <div class="post-meta">
                                        <div class="post-date">12.03.2020</div>
                                        <div class="post-category">
                                            <nuxt-link to="/blog/blog-grid-modern">life style</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="hero-blog-grid-item bg-cover" :style="{ backgroundImage: `url('/img/blog/slider/post-carousel-04.jpg')` }">
                            <div class="hero-blog-grid-content">
                                <div class="post-inner text-center">
                                    <h2 class="heading heading-h5">
                                        <nuxt-link to="/blog/blog-details">Healthy Eating With Fruit And Vegetables</nuxt-link>
                                    </h2>
                                    <div class="post-meta">
                                        <div class="post-date">12.03.2020</div>
                                        <div class="post-category">
                                            <nuxt-link to="/blog/blog-grid-modern">life style</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="hero-blog-grid-item bg-cover" :style="{ backgroundImage: `url('/img/blog/slider/post-carousel-05.jpg')` }">
                            <div class="hero-blog-grid-content">
                                <div class="post-inner text-center">
                                    <h2 class="heading heading-h5">
                                        <nuxt-link to="/blog/blog-details">Healthy Eating With Fruit And Vegetables</nuxt-link>
                                    </h2>
                                    <div class="post-meta">
                                        <div class="post-date">12.03.2020</div>
                                        <div class="post-category">
                                            <nuxt-link to="/blog/blog-grid-modern">life style</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

        <div class="page-content bg_color--18 pt--100">
            <div class="home-blog-grid-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="brook-section-title">
                                <h3 class="heading heading-h3 text-white">Latest Posts</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-sm-6 move-up wow mt--30" v-for="blog in data.blogs.slice(3, 11)" :key="blog.id">
                                    <div class="blog-grid">
                                        <div class="post-thumb">
                                            <nuxt-link :to="`/blog/${blog.slug}`">
                                                <img :src="blog.image" :alt="blog.alt">
                                            </nuxt-link>
                                        </div>
                                        <div class="post-content">
                                            <div class="post-inner">
                                                <h5 class="heading heading-h5">
                                                    <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                                                </h5>
                                                <div class="post-meta">
                                                    <div class="post-date">{{ blog.date }}</div>
                                                    <div class="post-category">
                                                        <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.category }}</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="brook-pagination-wrapper text-center pt--80 pt_md--40 pt_sm--40">
                                        <ul class="brook-pagination">
                                            <li class="page-item">
                                                <button>Prev</button>
                                            </li>
                                            <li class="page-item active">
                                                <button>1</button>
                                            </li>
                                            <li class="page-item">
                                                <button>2</button>
                                            </li>
                                            <li class="page-item">
                                                <button>Next</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mt_md--40 mt_sm--40 mt--30">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <FooterTwo />
    </div>
</template>

<script>
    import data from '../data/blog.json';

    import SwiperCore, { Navigation } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Navigation])

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
            Swiper,
            SwiperSlide
        },

        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
                swiperOptions: {
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                    breakpoints: {
                        768:{
                            slidesPerView : 2
                        },
                        320:{
                            centeredSlides: false,
                            slidesPerView : 1
                        }
                    }
                }
            }
        },

        mounted () {
            document.body.classList.add('template-color-18', 'template-font-1')
        },
        unmounted () {
            document.body.classList.remove('template-color-18', 'template-font-1')
        },
    };
</script>

<style lang="scss" scoped>
    .hero-blog-grid-item {
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
        // res
        @media #{$sm-layout}{
            height: 400px;
        }
    }
    .hero-blog-grid-content {
        .post-inner {
            padding-top: 250px;
            @media #{$sm-layout}{
                padding-top: 150px;
            }
            .heading {
                font-size: 36px;
                margin-bottom: 20px;
                // res
                @media #{$md-layout, $sm-layout}{
                    font-size: 24px;
                }
                a {
                    color: $white;
                    &:hover {
                        color: $color-18;
                    }
                }
            }
            .post-meta {
                color: $white;
                .post-date {
                    color: $white;
                }
                .post-category {
                    a {
                        color: $white;
                        &:hover {
                            color: $color-18;
                        }
                    }
                }
            }
        }
    }
    .swiper-slide {
        .hero-blog-grid-content {
            opacity: 0;
            visibility: hidden;
        }
        &-active {
            .hero-blog-grid-content {
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .ht-swiper-button-prev {
        font-size: 50px;
        left: 30px;
        // res
        @media #{$large-mobile}{
            display: none;
        }
    }
    .ht-swiper-button-next {
        font-size: 50px;
        right: 30px;
        // res
        @media #{$large-mobile}{
            display: none;
        }
    }
</style>