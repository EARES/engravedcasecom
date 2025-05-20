<template>
    <div class="main-container">
        <HeaderVerticalOffcanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        
        <div class="page-content ml--100 mr--100 ml_md--50 mr_md--50 ml_sm--30 mr_sm--30 ml_lg--50 mr_lg--50">
            <div class="brook-gallery-area pt--30 pb--150 pt_md--30 pb_md--80 pt_sm--0 pb_sm--80 bg_color--1 masonry-activation">
                <div class="container-fluid pl--0 pr--0">
                    <div class="row row--0">
                        <div class="col-lg-12">
                            <div class="gallery-wrapper row clearfix">
                                <MasonryWall :items="items" :ssr-columns="3" :column-width="528" :gap="30" >
                                    <template #default="{ item }">
                                        <nuxt-link :to="item.link">
                                            <div class="masonary-item width-33">
                                                <div class="gallery">
                                                    <div class="thumb">
                                                        <img :src="item.image" alt="Gallery Images">
                                                    </div>
                                                    <div class="hover-overlay yellow-overlay">
                                                        <div class="inner">
                                                            <span class="ion ion-android-add"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </template>
                                </MasonryWall>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterStyleFour />
        </div>
    </div>
</template>

<script>
    import MasonryWall from '@yeger/vue-masonry-wall'

    export default {
        components: {
            HeaderVerticalOffcanvas: () => import('@/components/HeaderVerticalOffcanvas'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroPhotoSliderGallery: () => import('@/components/HeroPhotoSliderGallery'),
            FooterStyleFour: () => import('@/components/FooterStyleFour'),
            MasonryWall
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
                items: [
                    {
                        image: "/img/gallery/gallery-2/gallery-1.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                    {
                        image: "/img/gallery/gallery-2/gallery-2.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                    {
                        image: "/img/gallery/gallery-2/gallery-3.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                    {
                        image: "/img/gallery/gallery-2/gallery-4.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                    {
                        image: "/img/gallery/gallery-2/gallery-5.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                    {
                        image: "/img/gallery/gallery-2/gallery-6.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                    {
                        image: "/img/gallery/gallery-2/gallery-7.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                    {
                        image: "/img/gallery/gallery-2/gallery-8.jpg",
                        link: "/portfolio/portfolio-details"
                    },
                ]
            }
        },
        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1');
        },
        unmounted () {
            document.body.classList.remove('template-color-1', 'template-font-1');
        },
    };
</script>
