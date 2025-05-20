<template>
    <div class="portfolio with-caption">
        <div class="thumb video-with-thumb">
            <nuxt-link :to="`/portfolio/${portfolio.slug}`">
                <img :src="portfolio.image" :alt="portfolio.heading">
            </nuxt-link>
        </div>
        <div class="caption-bottom text-start">
            <div class="info">
                <h5 class="heading heading-h5">
                    <nuxt-link :to="`/portfolio/${portfolio.slug}`">
                        {{ portfolio.heading }}
                    </nuxt-link>
                </h5>
                <p class="bk_pra">{{ portfolio.category }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["portfolio"]
    };
</script>