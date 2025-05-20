<template>
    <div class="blog-post-area blog-bg-image pt--250 pb--100 pb_sm--40" :style="{ backgroundImage: `url('/img/bg/bg-image-63.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="brook-section-title-restaurant text-center mb--50">
                        <h3 class="theme-color">Latest updated</h3>
                        <div class="bkseparator--10"></div>
                        <h3 class="title">food recipe</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 move-up wow mt--30" v-for="blog in data.blogs.slice(29, 32)" :key="blog.id">
                    <div class="blog-grid blog-restaurant">
                        <div class="post-thumb">
                            <nuxt-link :to="`/blog/${blog.slug}`">
                                <img :src="blog.image" :alt="blog.title">
                            </nuxt-link>
                        </div>
                        <div class="post-content">
                            <div class="post-inner">
                                <div class="post-categories">
                                    <nuxt-link to="/blog/blog-creative" class="theme-color">{{ blog.category }}</nuxt-link>
                                </div>
                                <h3 class="heading heading-h3">
                                    <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                                </h3>
                                <div class="post-meta meta-restaurant">
                                    <div class="post-date">{{ blog.date }}</div>
                                    <div class="post-author">by 
                                        <nuxt-link to="">{{ blog.author }}</nuxt-link>
                                    </div>
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
    import data from '../data/blog.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>