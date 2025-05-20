<template>
    <div class="main-wrapper">
        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <Breadcrumb title="Blog Grid Modern" />

        <div class="bk-blog-grid-area pt--100 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5">
            <div class="container">
                <div class="row mtn--50">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--100" v-for="blog in data.blogs.slice(3, 15)" :key="blog.id">
                        <BlogPostThree :blog="blog" addClass="blog-standard blog-grid--modern" readMoreButton="true" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-pagination-wrapper text-center pt--80 pt_sm--50">
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
        </div>

        <FooterTwo />
    </div>
</template>

<script>
    import data from '~/data/blog.json';

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            BlogPostThree: () => import('@/components/BlogPostThree'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },
        unmounted () {
            document.body.classList.remove('template-color-1', 'template-font-1')
        },
    };
</script>