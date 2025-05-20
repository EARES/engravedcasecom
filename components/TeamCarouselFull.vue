<template>
    <div class="container-fluid p-0">
        <div class="row no-gutters">
            <div class="col-12">
                <div class="brook-element-carousel swiper-custom-arrow swiper-arrow-hover">
                    <swiper
                        :speed="1000"
                        :loop="true"
                        :space-between= "60"
                        :slides-per-view="5"
                        :breakpoints="swiperOptions.breakpoints"
                        :navigation="swiperOptions.navigation"
                    >
                        <swiper-slide v-for="teamMember in data.teamMembers.slice(4, 7)" :key="teamMember.id">
                            <TeamMemberThree :teamMember="teamMember" />
                        </swiper-slide>
                    </swiper>

                    <!-- slider arrow navigation -->
                    <button class="swiper-btn swiper-btn-prev">
                        <i class="ion ion-ios-arrow-back"></i>
                    </button>
                    <button class="swiper-btn swiper-btn-next">
                        <i class="ion ion-ios-arrow-forward"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/team.json';

    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation } from 'swiper/core'
    SwiperCore.use([Navigation ])

    export default {
        components: {
            Swiper,
            SwiperSlide,
            TeamMemberThree: () => import('../components/TeamMemberThree'),
        },
        data () {
            return {
                data,
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1499:{
                            slidesPerView : 5
                        },
                        768:{
                            slidesPerView : 3
                        },
                        480:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }
    };
</script>
