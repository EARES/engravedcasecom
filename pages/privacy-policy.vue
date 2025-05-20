<template>
    <div class="main-container">
        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="brook-breadcrumb-area ptb--130 ptb-md--80 ptb-sm--60 breadcrumb-title-bar">
            <div class="container">
                <div class="breadcrumb-inner text-center">
                    <h1 class="heading heading-h1 line-height-1-5">Privacy Policy</h1>
                </div>
            </div>
        </div>

        <PrivacyPolicyContent />
        <FooterTwo />
    </div>
</template>

<script>
    import PrivacyPolicyContent from "../components/sections/PrivacyPolicyContent"
    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            FooterTwo: () => import('@/components/FooterTwo'),
            PrivacyPolicyContent
        },
        
        data () {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Privacy Policy'
            }
        },
    };
</script>