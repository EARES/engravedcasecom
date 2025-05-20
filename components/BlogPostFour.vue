<template>
    <div class="blog-grid" :class="addClass">
        <div class="post-thumb">
            <nuxt-link :to="`/blog/${blog.slug}`">
                <img :src="blog.image" :alt="blog.title">
            </nuxt-link>
        </div>
        <div class="post-content">
            <div class="post-inner">
                <h4 class="heading heading-h4">
                    <nuxt-link :to="`/blog/${blog.slug}`">
                        {{ blog.title }}
                    </nuxt-link>
                </h4>
                <div class="post-meta">
                    <div class="post-date">{{ blog.date }}</div>
                    <div class="post-category">
                        <nuxt-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</nuxt-link>
                    </div>
                </div>
                <div class="desc mt--20">
                    <p class="bk_pra">{{ blog.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {slugify} from "~/mixins/slugify";
    
    export default {
        props: ["blog", "addClass"],
        mixins: [slugify]
    };
</script>