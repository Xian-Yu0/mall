
<script setup>
import HomeBanner from '../Home/components/HomeBanner.vue';
import HomeFooter from '../Home/components/HomeFooter.vue';
import HomeHot from '../Home/components/HomeHot.vue';
import HomeNew from '../Home/components/HomeNew.vue';
import HomeProduct from '../Home/components/HomeProduct.vue';
import BuyerHeader from './BuyerHeader.vue';
import BuyerNav from './BuyerNav.vue';


</script>

<template>
    <BuyerNav></BuyerNav>
    <BuyerHeader></BuyerHeader>
    <div class="container">
        <HomeBanner />
    </div>    
        <HomeNew />
        <HomeHot />
        <HomeProduct />
    <HomeFooter></HomeFooter>
</template>