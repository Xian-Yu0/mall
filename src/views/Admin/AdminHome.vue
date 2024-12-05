<script setup>
import HomeBanner from '../Home/components/HomeBanner.vue';
import HomeFooter from '../Home/components/HomeFooter.vue';
import HomeHot from '../Home/components/HomeHot.vue';
import HomeNew from '../Home/components/HomeNew.vue';
import HomeProduct from '../Home/components/HomeProduct.vue';
import AdminHeader from './AdminHeader.vue';
import AdminNav from './AdminNav.vue';


</script>

<template>
    <AdminNav></AdminNav>
    <AdminHeader></AdminHeader>
    <div class="container">
        <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>
    <HomeFooter></HomeFooter>
</template>