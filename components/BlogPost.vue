<template>
    <div class="blog blog-style--1">
        <div class="thumb">
            <nuxt-link :to="`/blog/${blog.slug}`">
                <img 
                    :src="blog.image" 
                    :alt="blog.title"
                >
            </nuxt-link>
        </div>
        <div class="blog-content blog-position--bottom">
            <div class="content">
                <ul class="meta">
                    <li>{{ blog.date }}</li>
                    <li>{{ blog.category }}</li>
                </ul>
                <h3 class="the-title">
                    <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>