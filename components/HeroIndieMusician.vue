<template>
    <div class="slider-area hero-business position-relative">
        <div class="hero-item bg-image" :style="{ backgroundImage: `url('/img/slider/indie-musician.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="hero-content-music text-center">
                            <h1>Lauren Alisa.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-bottom-content">
                <a href="javascript:void(0)" class="scroll-more">
                    <h6>Scroll for more</h6>
                    <img src="/img/slider/mouse-icon.png" alt="icon">
                </a>
                <div class="video-btn position--center">
                    Watch video
                    <a href="https://www.youtube.com/watch?v=9No-FiEInLA" target="_blank">
                        <div class="play__btn pl-3">
                            <div class="video-icon third-icon secondary-color"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hero-business {
        .hero-content-music {
            h1 {
                color: $white;
                font-size: 150px;
                font-weight: 600;
                line-height: 1.2;
                font-family: "Reenie Beanie";
                // res
                @media #{$md-layout}{
                    font-size: 100px;
                }
                @media #{$sm-layout}{
                    font-size: 60px;
                }
            }
        }
        .hero-bottom-content {
            position: absolute;
            bottom: 80px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0 15px;
            // res
            @media screen and (min-width: 1200px) {
                padding: 0 150px;
            }
            @media #{$md-layout, $sm-layout}{
                bottom: 30px;
            }
            .scroll-more {
                display: flex;
                align-items: center;
                border: none;
                text-align: left;
                h6 {
                    color: $white;
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 0;
                    padding-right: 15px;
                    font-family: $body-font;
                }
                // res
                @media #{$small-mobile}{
                    display: none;
                }
            }
            .video-btn {
                display: flex;
                align-items: center;
                color: $white;
                font-weight: 700;
                a {
                    padding-left: 30px;
                    .video-icon {
                        @media #{$sm-layout}{
                            width: 70px;
                            height: 70px;
                        }
                    }
                }
            }
        }
    }
</style>