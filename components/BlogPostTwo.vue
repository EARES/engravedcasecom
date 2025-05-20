<template>
    <div class="blog blog-style--2 creative--blog">
        <div class="thumb">
            <nuxt-link :to="`/blog/${blog.slug}`">
                <img :src="blog.image" :alt="blog.title">
            </nuxt-link>
        </div>

        <div class="blog-content">
            <div class="content">
                <h3 class="the-title">
                    <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                </h3>
                <ul class="meta">
                    <li>{{ blog.date }}</li>
                    <li>
                        <nuxt-link to="/blog/blog-creative">{{ blog.categories[0] }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>