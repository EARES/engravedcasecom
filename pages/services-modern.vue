<template>
    <div class="main-container">
        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <ServiceModernBreadcrumb />
        <ServiceModern />
        <ServiceIconBoxTwo />
        <CallToAction />
        <FooterTwo />
    </div>
</template>

<script>
    import ServiceIconBoxTwo from "@/components/sections/ServiceIconBoxTwo"
    
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ServiceModernBreadcrumb: () => import('@/components/ServiceModernBreadcrumb'),
            ServiceModern: () => import('@/components/ServiceModern'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
            ServiceIconBoxTwo
        },
        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },
    };
</script>