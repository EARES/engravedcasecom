<template>
    <div class="error404">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="error-image">
                        <img class="img-fluid" src="/img/others/page-404-image.webp" alt="Not Found Image">
                    </div>
                    <h1 class="error-404-title text-white" v-if="error.statusCode === 404">Oops! Page not found!</h1>
                    <h1 class="error-404-title text-white" v-else>An error occurred</h1>
                    <div class="error-buttons">
                        <nuxt-link to="/" class="btn btn-primary text-white">
                            <span class="button-text">Go back to homepage</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss">
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #111111;
    }
    .error-404-title {
        font-weight: 500;
        padding-top: 40px;
        margin-bottom: 30px;
    }
</style>
