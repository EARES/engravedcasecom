<template>
    <div class="main-container">
        <HeaderTransparentWithSocial @togglenav="navOpen = !navOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <HeroAuthenticStudio />
        <AboutAuthenticStudio />
        <VideoService />
        <PortfolioTwo addClass="pt--130 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" />
        <ServiceIconBoxWithTitleStyleTwo class="pt-0 pb-0" />
        <TestimonialFive />
        <FooterStyleFour />
    </div>
</template>

<script>
    import PortfolioTwo from "@/components/sections/PortfolioTwo"
    import ServiceIconBoxWithTitleStyleTwo from "@/components/sections/ServiceIconBoxWithTitleStyleTwo"
    import TestimonialFive from "@/components/sections/TestimonialFive"
    export default {
        components: {
            PortfolioTwo,
            ServiceIconBoxWithTitleStyleTwo,
            TestimonialFive
        },

        data() {
            return {
                navOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-20', 'template-font-2')
        },
        unmounted () {
            document.body.classList.remove('template-color-20', 'template-font-2')
        }
    };
</script>