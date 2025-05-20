<template>
    <div class="brook-portfolio-area bg_color--1 bk-masonary-wrapper">
        <div class="portfolio-grid-metro3 mesonry-list">
            <MasonryWall :items="items" :ssr-columns="2" :column-width="815" :gap="30" class="mt--30">
                <template #default="{ item }">
                    <div class="poss_relative portfolio portfolio_style--1">
                        <div class="thumb">
                            <img :src="item.image" :alt="item.heading">
                        </div>
                        <div class="port-overlay-info with-caption position-left">
                            <div class="hover-action">
                                <h3 class="post-overlay-title font-24">
                                    <nuxt-link to="/portfolio/portfolio-details">{{item.heading}}</nuxt-link>
                                </h3>
                                <div class="category">{{ item.category }}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </MasonryWall>
        </div>
    </div>
</template>

<script>
    import MasonryWall from '@yeger/vue-masonry-wall'
    
    export default {
        components: {
            MasonryWall,
        },
        data () {
            return {
                items: [
                    {
                        id: 1,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-1.jpg"
                    },
                    {
                        id: 2,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-2.jpg"
                    },
                    {
                        id: 3,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-3.jpg"
                    },
                    {
                        id: 4,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-4.jpg"
                    },
                    {
                        id: 5,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-5.jpg"
                    },
                    {
                        id: 6,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-6.jpg"
                    }
                ]
            }
        }
    };
</script>