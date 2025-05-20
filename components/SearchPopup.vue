<template>
    <div class="brook-search-popup">
        <div class="search-overlay" @click="$emit('toggleSearch')"></div>
        <div class="inner">
            <div class="search-header">
                <div class="logo">
                    <nuxt-link to="/">
                        <img src="/img/logo/brook-black.png" alt="brand logo">
                    </nuxt-link>
                </div>
                <button class="search-close" @click="$emit('toggleSearch')"></button>
            </div>
            <div class="search-content">
                <form>
                    <label>
                        <input type="search" placeholder="Enter search keyword…">
                    </label>
                    <button class="search-submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    </div>
</template>