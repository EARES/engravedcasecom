<template>
    <!-- Start Hamburger Menu -->
    <div class="open-hamberger-wrapper d-none d-lg-block" id="popup-fullscreen-menu" :style="{ backgroundImage: `url('/img/bg/bg-image-28.jpg')` }">
        <div class="page-close light-version" @click="$emit('toggleFullpageMenu')"></div>
        <div class="header-default light-logo--version poss_relative">
            <div class="mainmenu-wrapper">
                <Navigation />
            </div>
        </div>

        <!-- Start Search -->
        <div class="row hamberger-search">
            <div class="col-12">
                <form>
                    <div class="input-box">
                        <input type="text" placeholder="Enter search keyword…">
                        <button>
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="offcanvas-extra-info mt--150">
            <div class="row align-items-end">
                <div class="col-lg-6">
                    <div class="info">
                        <div class="bk-hover mb--40">
                            <h5 class="heading heading-h5 text-white">Connect</h5>
                            <div class="bkseparator--20"></div>
                            <p class="bk_pra font-16">Your address goes here</p>
                            <p class="bk_pra font-16">
                                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                            </p>
                        </div>
                        <ul class="social-icon text-start tooltip-layout icon-size-large">
                            <li class="facebook">
                                <a href="https://www.facebook.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Facebook">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="twitter">
                                <a href="https://twitter.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="instagram">
                                <a href="https://www.instagram.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="copyright-right text-end">
                        <p class="bk_pra font-16">
                            &copy; 2023 <b class="text-white">Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"><b>HasThemes</b></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- End Hamburger Menu -->
</template>

<script>
    export default {
        components: {
            Navigation: () => import ('@/components/Navigation'),
        },
    };
</script>

<style lang="scss" scoped>
    .offcanvas-extra-info {
        .bk_pra {
            color: #999;
        }
    }
</style>