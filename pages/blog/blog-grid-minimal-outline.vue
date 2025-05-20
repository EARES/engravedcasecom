<template>
    <div class="main-container">
        <HeaderBlack addClass="header-transparent" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcrumb-area pt--260 pb--80 pt_md--200 pt_sm--150 breadcrumb-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1">Grid Minimal Outline</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bk-blog-grid-area pt--100 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mtn--60">
                        <div class="row row--30">
                            <div class="col-sm-6 move-up wow mt--60" v-for="blog in data.blogs.slice(3, 15)" :key="blog.id">
                                <div class="blog-grid-minimal outline">
                                    <div class="grid-overlay" :style="{ backgroundImage: `url(${blog.image})` }"></div>
                                    <div class="post-content">
                                        <h5 class="heading">
                                            <nuxt-link :to="`/blog/${blog.slug}`">
                                                {{ blog.title }}
                                            </nuxt-link>
                                        </h5>
                                        <div class="post-meta">
                                            <div class="post-date">{{ blog.date }}</div>
                                            <div class="post-category">
                                                <nuxt-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="brook-pagination-wrapper text-center pt--80">
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

                    <div class="col-lg-4 mt_md--40 mt_sm--40">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />
    </div>
</template>

<script>
    import data from '~/data/blog.json';
    import {slugify} from '~/mixins/slugify';
    
    export default {
        mixins: [slugify],

        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BlogPostFour: () => import('@/components/BlogPostFour'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
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