<template>
    <footer class="page-footer bg_color--3 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5">
        <!-- Start Footer Top Area -->
        <div class="bk-footer-inner pt--150 pb--30 pt_sm--100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="footer-widget text-var--2">
                            <div class="logo">
                                 <img src="/img/logo/engravedcase_logo_white.png" alt="engraved case logo">
                            </div>
                            <div class="footer-inner">
                                <p>
                                    Our custom engraved cases are the perfect mix of style and sentiment. Upload a photo, meaningful quote, or name or anything you want – we’ll laser engrave it into a durable, sleek phone case tailored to your phone model.
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mt_md--40 mt_sm--40 mt-3">
                        <div class="footer-widget text-var--2 menu--contact">
                            <h2 class="widgettitle">Contact</h2>
                            <div class="footer-address">
                                <div class="bk-hover">
                                    <p>20C No: 3 Chi Shin Street <br> New Territories, Hong Kong</p>
                                    <p>
                                        <a href="mailto:info@engravedcase.com">info@engravedcase.com</a>
                                    </p>
                                    <p>
                                        <a href="tel:+85293105591">+852 9310 55 91</a>
                                    </p>
                                </div>
                                <div class="social-share social--transparent text-white">
                                    <a href="https://www.instagram.com/engravedcasecom/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                      <a href="https://www.etsy.com/shop/engravedcasecom" target="_blank">
                                        <i class="fab fa-etsy"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 mt_md--40 mt_sm--40  mt-3">
                        <div class="footer-widget text-var--2 menu--instagram">
                            <h2 class="widgettitle">Instagram</h2>
                            <div class="ft-instagram-list">
                                <div class="instagram-grid-wrap">
                                    <div class="item-grid grid-style--1" v-for="instagram in instagramPosts" :key="instagram.id">
                                        <div class="thumb">
                                            <nuxt-link to="https://www.instagram.com/engravedcasecom/" target="_blank">
                                                <img :src="instagram.image" alt="engravedcase instagram">
                                            </nuxt-link>
                                            <div class="item-info">
                                                <div class="inner">
                                                    <nuxt-link to="https://www.instagram.com/engravedcasecom/" target="_blank">
                                                        <i class="fas fa-heart"></i>
                                                        {{ instagram.like }}
                                                    </nuxt-link>
                                                    <nuxt-link to="https://www.instagram.com/engravedcasecom/" target="_blank">
                                                        <i class="fas fa-comment-dots"></i>
                                                        {{ instagram.comment }}
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Footer Top Area -->

        <!-- Start Copyright Area -->
        <div class="copyright ptb--50 text-var-2">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="copyright-right text-center">
                            <p>&copy; 2025 <b>EngravedCase</b> Made with <i class="fa fa-heart text-danger"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Area -->
    </footer>
</template>

<script>
    export default {
        data () {
            return {
                instagramPosts: [
                    {
                        "id": 1,
                        "image": "/img/instagram/insta-6.jpg",
                        "like": "1K",
                        "comment": "8"
                    },
                    {
                        "id": 2,
                        "image": "/img/instagram/insta-2.jpg",
                        "like": "6K",
                        "comment": "9"
                    },
                    {
                        "id": 3,
                        "image": "/img/instagram/insta-3.jpg",
                        "like": "3K",
                        "comment": "4"
                    },
                    {
                        "id": 4,
                        "image": "/img/instagram/insta-4.jpg",
                        "like": "1K",
                        "comment": "3"
                    },
                    {
                        "id": 5,
                        "image": "/img/instagram/insta-1.jpg",
                        "like": "2K",
                        "comment": "7"
                    },
                    {
                        "id": 6,
                        "image": "/img/instagram/insta-5.jpg",
                        "like": "1K",
                        "comment": "8"
                    }
                ]
            }
        }
    };
</script>
