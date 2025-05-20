<template>
    <div class="main-wrapper">
        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        <Breadcrumb title="Tabs" />

        <section class="tabs-section section ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container mtn--50">
                <div class="row mt--50">
                    <div class="col-12">
                        <h3 class="mb--30">Basic Tabs</h3>
                        <TabOne />
                    </div>
                </div>
            </div>
        </section>

        <FooterTwo />
    </div>
</template>

<script>

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TabOne: () => import('@/components/TabOne'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },
    };
</script>