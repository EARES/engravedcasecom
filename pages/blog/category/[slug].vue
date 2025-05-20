<template>
    <div class="main-wrapper">
        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <Breadcrumb title="All Categories" />

        <div class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-sm-6 move-up wow mt--30" v-for="(blog, i) in posts" :key="i">
                                <div class="blog-grid">
                                    <div class="post-thumb">
                                        <nuxt-link :to="`/blog/${blog.slug}`">
                                            <img :src="blog.image" :alt="blog.title">
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
                                                    <nuxt-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</nuxt-link>
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

        <FooterTwo />
    </div>
</template>

<script>
    import data from '~/data/blog.json';
    import {slugify} from '~/mixins/slugify';

    export default {
        mixins: [slugify],
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
                slug: this.$route.params.slug,
            }
        },
        computed: {
            posts() {
                return this.data.blogs.filter((post) => post?.categories?.includes(this.slug.split("-").join(" ")));
            },
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },
        unmounted () {
            document.body.classList.remove('template-color-1', 'template-font-1')
        },
    };
</script>