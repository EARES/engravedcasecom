<template>
    <div class="main-container">
        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <HeroStartUp />
        <FeatureStartUp />
        <WhatWeDo />
        <EffectiveSolution />
        <StartUpStratagy />
        <PortfolioItemFilter />
        <NewsletterCta />
        <FooterTwo />
    </div>
</template>

<script>
    import FeatureStartUp from "@/components/sections/FeatureStartUp"
    import StartUpStratagy from "@/components/sections/StartUpStratagy"
    import PortfolioItemFilter from "@/components/sections/PortfolioItemFilter"
    export default {
        components: {
            FeatureStartUp,
            StartUpStratagy,
            PortfolioItemFilter
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-5', 'template-font-1')
        }
    };
</script>