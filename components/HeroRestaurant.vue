<template>
  <div class="hero-restaurant">
    <div class="hero-item-restaurant bg-image">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <video
              autoplay
              muted
              loop
              class="fixed-top position-absolute w-full h-full object-cover d-block d-md-none"
            >
              <source src="/video/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoplay
              muted
              loop
              class="position-absolute w-full h-full object-cover d-none d-md-block w-100"
              style="left: 0; top: 0; "
            >
              <source src="/video/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              class="hero-content-4 position-relative"
              style="z-index: 99999; margin-top: 15em;"
            >
              <h3>
                Your<br />
                moments.
              </h3>
              <h4 class="theme-color">Engraved on premium cases</h4>
              <nuxt-link to="/" class="check-btn">Check our products</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
