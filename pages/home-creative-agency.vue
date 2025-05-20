<template>
    <div class="main-container bg_color--4">
        <Header @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <HeroAgency />
        <AboutAgency />
        <ServiceAgency />
        <FeaturedProjects />
        <AgencyCounterup />
        <TestimonialFour />
        <BlogTwo />
        <Firefly />
        <FooterAgency />
    </div>
</template>

<script>
    import TestimonialFour from "@/components/sections/TestimonialFour"
    import BlogTwo from "@/components/sections/BlogTwo"
    export default {
        components: {
            TestimonialFour,
            BlogTwo
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },
    };
</script>