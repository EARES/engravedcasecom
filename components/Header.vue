<template>
    <header class="br_header header-default header-transparent pt--15 light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix" :class="{'vue-fixed-header--isFixed': isSticky}">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="header__wrapper mr--0">
                        <!-- Header Left -->
                        <div class="header-left flex-20">
                            <div class="logo">
                                <nuxt-link to="/">
                                    <img src="/img/logo/brook.png" alt="Brook Logo">
                                </nuxt-link>
                            </div>
                        </div>
                        <!-- Main menu Wrap -->
                        <div class="header-flex-right flex-80">
                            <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                                <Navigation />
                            </div>
                            <!-- Header Right -->

                            <div class="header-right have-not-flex pl--35 pl_md--5 pr_md--20 pl_sm--5 pr_sm--20">
                                <!-- Start Popup Search Wrap -->
                                <div class="popup-search-wrap">
                                    <button class="btn-search-click" @click="$emit('toggleSearch')">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                                <!-- End Popup Search Wrap -->

                                <!-- Start Hamburger -->
                                <div class="manu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none" @click="$emit('togglenav')">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>
                                <!-- End Hamburger -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import Navigation from '@/components/Navigation';

    export default {
        components: {
            Navigation
        },
        data(){
            return {
                isSticky: false,
            }
        },
        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>

<style lang="scss" scoped>
    .vue-fixed-header--isFixed {
        background-color: #333;
        .mainmenu-wrapper .page_nav ul.mainmenu li.lavel-1 {
            padding: 20px 0;
        }
    }
</style>