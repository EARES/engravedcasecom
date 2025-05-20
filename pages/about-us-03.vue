<template>
    <div class="main-container">
        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <AboutBreadcrumbFour />
        <ServiceTwo />
        <WhatWeDoThree />
        <TeamTwo />
        <AccordionOne />
        <FeaturesOne />
        <CallToAction />
        <FooterTwo />
    </div>
</template>

<script>
    import ServiceTwo from "@/components/sections/ServiceTwo"
    import WhatWeDoThree from "@/components/sections/WhatWeDoThree"
    import TeamTwo from "@/components/sections/TeamTwo"
    import AccordionOne from "@/components/sections/AccordionOne"
    import FeaturesOne from "@/components/sections/FeaturesOne"
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            AboutBreadcrumbFour: () => import('@/components/AboutBreadcrumbFour'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
            ServiceTwo,
            WhatWeDoThree,
            TeamTwo,
            AccordionOne,
            FeaturesOne
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },
        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },
        unmounted () {
            document.body.classList.remove('template-color-1', 'template-font-1')
        },
    };
</script>