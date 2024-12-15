
<script setup>
import HomeBanner from '../Home/components/HomeBanner.vue';
import HomeFooter from '../Home/components/HomeFooter.vue';
import HomeHot from '../Home/components/HomeHot.vue';
import HomeNew from '../Home/components/HomeNew.vue';
import HomeProduct from '../Home/components/HomeProduct.vue';
import SellerHeader from './SellerHeader.vue';
import SellerNav from './SellerNav.vue';


</script>

<template>
    <SellerNav></SellerNav>
    <SellerHeader></SellerHeader>
    <div class="container">
        <HomeBanner />
    </div>    
        <HomeNew To="SellerDetail" />
        <HomeHot To="SellerDetail" />
        <HomeProduct To="SellerDetail" />
    <HomeFooter></HomeFooter>
</template>