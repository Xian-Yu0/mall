<script setup>
import { onMounted, ref } from 'vue';
import AdminHeader from './AdminHeader.vue';
import AdminNav from './AdminNav.vue';
import { AdminGetSellersAPI, AdminSearchSellerAPI } from '@/apis/Admin';
import { useRouter } from 'vue-router';

const router = useRouter()

const sellers = ref([])
const getSellers = async () => {
  const temp = await AdminGetSellersAPI();
  sellers.value = temp.result;
  searchInput.value = ''
}
onMounted(()=>{getSellers()})

const searchInput = ref('')
const searchSeller = async() => {
  const temp = await AdminSearchSellerAPI(searchInput.value)
  sellers.value = temp.result;
}

const enterSeller = (id) => {
  router.push(`/AdminSellerGoods/${id}`)
}

</script>

<template>
      <div>
    <el-container class="background">
      <el-aside class="aside" width="show?'64px':'300px'">
        <AdminNav></AdminNav>
      </el-aside>
        <el-header>
          <AdminHeader></AdminHeader>
        </el-header>
        <el-main style="padding-left: 10%; padding-right: 10%;">
          <el-row style="margin-top: 80px; margin-bottom: -20px;">
            <el-col :span="19">
              <el-input
                placeholder="查找商家"
                prefix-icon="el-icon-search" v-model="searchInput"
                style="margin-bottom: 5%"></el-input>
            </el-col>
            <el-col :span="2" style="margin-left: 20px;">
              <el-button
                type="primary"
                @click="searchSeller">
                搜索商家
              </el-button>
            </el-col>
            <el-col :span="2" style="margin-left: 10px;">
              <el-button
                type="primary"
                @click="getSellers">
                查看全部商家
              </el-button>
            </el-col>
          </el-row>
            <el-card v-for="seller in sellers" :key="seller.sellerId" style="margin-bottom: 2%">
            <el-row>
              <el-col :offset="2" :span="16">
                <el-row style="margin-bottom: 3%">
                  <el-link type="primary" v-on:click="enterSeller(seller.sellerId)">
                    <span style="font-size: 18px"><strong>{{ seller.sellerName }}</strong></span>
                  </el-link>
                </el-row>
                <el-row>
                  <el-tag type="primary">商家编号<span>&nbsp;&nbsp;{{ seller.sellerId }}</span></el-tag>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-main>
    </el-container>
  </div>

</template>