<template>
    <div class="main-wrapper">
        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <Breadcrumb title="Team Member" />
        <TeamOne />
        <TeamTwo />
        <div class="brook-team-area bg_color--1 ptb--100 ptb-sm--60 ptb-md--80">
            <TeamCarouselFull />
        </div>
        <TeamThree />
        <FooterTwo />
    </div>
</template>

<script>
    import TeamOne from "@/components/sections/TeamOne"
    import TeamTwo from "@/components/sections/TeamTwo"
    import TeamThree from "@/components/sections/TeamThree"
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TeamCarouselFull: () => import('@/components/TeamCarouselFull'),
            FooterTwo: () => import('@/components/FooterTwo'),
            TeamOne,
            TeamTwo,
            TeamThree
        },

        data () {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },
    };
</script>