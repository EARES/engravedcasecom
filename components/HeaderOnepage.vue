<template>
    <header class="br_header header-default one-page-header light-logo-version headroom--sticky clearfix" :class="{'vue-fixed-header--isFixed': isSticky}">
        <div class="header-wrapper">
            <div class="header-left-wrapper">
                <div class="branding">
                    <div class="logo">
                        <nuxt-link to="/">
                            <img src="/img/logo/simple-light-logo.png" alt="brook logo">
                        </nuxt-link>
                    </div>
                </div>
                <div class="header-left-inner">
                    <div class="header-page-menu-style-2 d-none d-xl-block">
                        <div class="manu-hamber-2 hamberger-trigger" @click="$emit('toggleFullpageMenu')">
                            <div>
                                <i></i>
                            </div>
                        </div>
                    </div>
                    <div class="header-page-menu-style-2 d-block d-xl-none">
                        <div class="manu-hamber-2 popup-mobile-click" @click="$emit('togglenav')">
                            <div>
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="header-right-wrapper d-none d-sm-block">
                <div class="header-text text-end">
                    <h5 class="heading heading-h5 font-20 text-white"> 
                        <span class="fa fa-heart"></span> 
                        Hello, we are brook studio
                    </h5>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
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
}
</script>