<template>
    <div class="main-container">
        <HeaderBlack addClass="header-transparent" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcrumb-area pt--260 pb--80 pt_md--200 pt_sm--150 bg_color--5 breadcrumb-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1">Grid Masonry</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-mesonry bk-blog-masonry clearfix">
                            <div class="mesonry-list">
                                <MasonryWall :items="data.blogs.slice(20, 29)" :ssr-columns="3" :column-width="350" :gap="30">
                                        <template #default="{ item }">
                                            <div class="blog-grid">
                                                <div class="post-thumb">
                                                    <nuxt-link :to="`/blog/${item.slug}`">
                                                        <img :src="item.image" :alt="item.title">
                                                    </nuxt-link>
                                                </div>
                                                <div class="post-content">
                                                    <div class="post-inner">
                                                        <h5 class="heading heading-h5">
                                                            <nuxt-link :to="`/blog/${item.slug}`">{{ item.title }}</nuxt-link>
                                                        </h5>
                                                        <div class="post-meta">
                                                            <div class="post-date">{{ item.date }}</div>
                                                            <div class="post-category">
                                                                <nuxt-link v-for="(category, i) in item.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</nuxt-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                </MasonryWall>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
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
                </div>
            </div>
        </div>

        <FooterTwo />
    </div>
</template>

<script>
    import data from '~/data/blog.json';
    import {slugify} from '~/mixins/slugify';
    import MasonryWall from '@yeger/vue-masonry-wall'

    export default {
        mixins: [slugify],

        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BlogPostFour: () => import('@/components/BlogPostFour'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
            MasonryWall
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