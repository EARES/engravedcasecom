<template>
  <div class="main-container">
        <h1 class="d-none">engravedcase</h1>

    <HeaderVerticalRestaurant />
    <div class="page-content left-vertical-header">
      <HeroRestaurant />
      <div class="position-relative bg-white" style="z-index: 9999999999;">
        <!-- Start About Area -->
      <div class="brook-about-area bg_color--1 ptb--120 ptb-md--80 ptb-sm--60">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-4 col-lg-6 col-md-12">
              <div class="about-inner authenthick-about pr--30">
                <div class="brook-section-title-restaurant text-start mb--50">
                  <h3 class="theme-color">Discover</h3>
                  <div class="bkseparator--10"></div>
                  <h3 class="title">our story</h3>
                </div>
                <p class="font-size-18 wow move-up">
                  At <b>EngravedCase</b>, we are passionate about creating
                  high-quality, customisable products that reflect your unique
                  style and personality. Our journey began with a simple idea:
                  <br />
                  <br />
                  <i>To provide customers with the ability to personalise their
                  products with intricate engravings and designs.</i>
                </p>
                <div class="bkseparator--30"></div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-6 offset-xl-1 col-md-12">
              <div
                class="about-thumb text-center text-lg-end mt_md--40 mt_sm--40"
              >
                <img src="/img/others/our-studio.jpg" class="img-fluid rounded" alt="engravedcase about us" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End About Area -->

      <!-- Icon Box Area Start -->
      <div class="brook-icon-boxes-area pb--100 pb_md--80 pb_sm--60">
        <div class="container">
          <div class="row">
            <!-- Single Icon Box Start -->
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div
                class="icon-box text-center no-border bg-transparant vibrate-style"
              >
                <div class="inner">
                  <div class="icon">
                    <img
                      src="/img/logo/quality.png"
                      alt="engravedcase quality"
                    />
                  </div>
                  <div class="content">
                    <h4 class="heading heading-h5">Quality</h4>
                    <p>
                      We are committed to providing the highest quality
                      materials and service to our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Single Icon Box End -->
            <!-- Single Icon Box Start -->
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div
                class="icon-box text-center no-border bg-transparant vibrate-style"
              >
                <div class="inner">
                  <div class="icon">
                    <img
                      src="/img/logo/custom.png"
                      alt="engravedcase customisable"
                    />
                  </div>
                  <div class="content">
                    <h4 class="heading heading-h5">Customisable</h4>
                    <p>
                      We understand that every customer has unique needs and
                      preferences for their products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Single Icon Box End -->
            <!-- Single Icon Box Start -->
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div
                class="icon-box text-center no-border bg-transparant vibrate-style"
              >
                <div class="inner">
                  <div class="icon">
                    <img
                      src="/img/logo/premium.png"
                      alt="engravedcase premium"
                    />
                  </div>
                  <div class="content">
                    <h4 class="heading heading-h5">Premium</h4>
                    <p>
                      Our products are crafted with the finest materials and
                      attention to detail to ensure a premium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Single Icon Box End -->
          </div>
        </div>
      </div>
      <!-- Icon Box Area End -->

      <!-- Start Product Area -->
      <div class="brook-product-area pb--150 pb_md--80 pb_sm--60 bg_color--1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="brook-section-title-restaurant text-center mb--50">
                <h3 class="theme-color">Our Great</h3>
                <div class="bkseparator--10"></div>
                <h3 class="title">Products</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <ProductTab />
            </div>
          </div>
        </div>
      </div>
      <!-- End Product Area -->

      </div>
      
      <FooterTwo class="pl-0 pr-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Static imports - components are loaded immediately
import HeaderVerticalRestaurant from '@/components/HeaderVerticalRestaurant.vue'
import HeroRestaurant from '@/components/HeroRestaurant.vue'
import ProductTab from '@/components/ProductTab.vue'
import FooterTwo from '@/components/FooterTwo.vue'

// Lifecycle management
onMounted(() => {
  document.body.classList.add(
    'template-color-24',
    'template-font-7',
    'CerebriSans-font'
  )
})

onUnmounted(() => {
  document.body.classList.remove(
    'template-color-24',
    'template-font-7',
    'CerebriSans-font'
  )
})
</script>
