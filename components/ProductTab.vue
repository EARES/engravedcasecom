<template>
  <div class="tabs restaurant-product-tab product-tab-two">
    <div class="card-header">
      <ul
        class="nav nav-tabs nav-pills card-header-pills"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="persons-tab"
            data-bs-toggle="tab"
            data-bs-target="#persons-tab-pane"
            type="button"
            role="tab"
            aria-controls="persons-tab-pane"
            aria-selected="true"
          >
            persons
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pets-tab"
            data-bs-toggle="tab"
            data-bs-target="#pets-tab-pane"
            type="button"
            role="tab"
            aria-controls="pets-tab-pane"
            aria-selected="false"
          >
            pets
          </button>
        </li>
      </ul>
    </div>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="persons-tab-pane"
        role="tabpanel"
        aria-labelledby="persons-tab"
        tabindex="0"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="product-style-two mt--30">
                <div class="product-thumbnail">
                  <div class="thumbnail">
                    <div class="product-main-image">
                      <img
                        src="/img/products/1.webp"
                        alt="engravedcase persons 1"
                      />
                    </div>
                  </div>
                </div>
                <div class="product-info">
                  <h4 class="heading heading-h5">
                    Custom Engraved Metal iPhone Case
                  </h4>
                  <span class="tag">
                    Custom Engraved Metal and Wood Phone Case with Photo, Text or Design – Personalized iPhone Cover with Steel Frame & MagSafe Compatible Grip
                  </span>
                  <div class="price">
                    <span class="new-price theme-color">
                        iPhone 13 Pro, iPhone 14 Pro, iPhone 15 Pro, iPhone 16 Pro, iPhone 13 Pro Max, iPhone 14 Pro Max, iPhone 15 Pro Max, iPhone 16 Pro Max, iPhone 16, iPhone 16 Plus
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="product-style-two mt--30">
                <div class="product-thumbnail">
                  <div class="thumbnail">
                    <div class="product-main-image">
                      <img
                        src="/img/products/2.jpg"
                        alt="engravedcase persons 2"
                      />
                    </div>
                  </div>
                </div>
                <div class="product-info">
                  <h4 class="heading heading-h5">
                    Custom Engraved Vegan Leather iPhone Case
                  </h4>
                  <span class="tag">
                    Custom Engraved Vegan Leather Phone Case with Photo, Text or Design – Personalized iPhone Cover in Color Options and MagSafe Compatible Grip
                  </span>
                  <div class="price">
                    <span class="new-price theme-color">
                        iPhone 13 Pro, iPhone 14 Pro, iPhone 15 Pro, iPhone 16 Pro, iPhone 13 Pro Max, iPhone 14 Pro Max, iPhone 15 Pro Max, iPhone 16 Pro Max, iPhone 16, iPhone 16 Plus
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pets-tab-pane"
        role="tabpanel"
        aria-labelledby="pets-tab"
        tabindex="0"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="product-style-two mt--30">
                <div class="product-thumbnail">
                  <div class="thumbnail">
                    <div class="product-main-image">
                      <img src="/img/products/3.jpg" alt="engravedcase pets" />
                    </div>
                  </div>
                </div>
                <div class="product-info">
                  <h4 class="heading heading-h5">
                    Custom Engraved Wood iPhone Case
                  </h4>
                  <span class="tag">
                    Custom Engraved Wood Phone Case with Photo, Text or Design - 
                    Personalized iPhone Cover with Natural Finish and MagSafe
                    Compatible Grip
                  </span>
                  <div class="price">
                    <span class="new-price theme-color">
                      iPhone 13 Pro, iPhone 14 Pro, iPhone 15 Pro, iPhone 16
                      Pro, iPhone 13 Pro Max, iPhone 14 Pro Max, iPhone 15 Pro
                      Max, iPhone 16 Pro Max
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.restaurant-product-tab {
  border: none;
  padding: 0;
}
</style>
