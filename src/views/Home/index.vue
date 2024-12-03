
<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeFooter from './components/HomeFooter.vue';
import HomeHeader from './components/HomeHeader.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNav from './components/HomeNav.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>

<template>
    <HomeNav></HomeNav>
    <HomeHeader></HomeHeader>
    <div class="container">
        <HomeBanner />
    </div>    
        <HomeNew />
        <HomeHot />
        <HomeProduct />
    <HomeFooter></HomeFooter>
</template>