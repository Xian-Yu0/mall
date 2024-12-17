<script setup>
import { onMounted, ref } from 'vue';
import AdminHeader from './AdminHeader.vue';
import AdminNav from './AdminNav.vue';
import { AdminDeleteGoodAPI, AdminGetGoodsAPI, AdminGetSellerGoodsAPI, AdminSearchGoodAPI } from '@/apis/Admin';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import 'element-plus/theme-chalk/el-message-box.css';

const router = useRouter();
const route = useRoute();

const sellerGoods = ref([])
const getSellerGoods = async () => {
  const temp = await AdminGetSellerGoodsAPI(route.params.id)
  sellerGoods.value = temp.data.result;
  for (let i = 0; i < sellerGoods.value.length; i++)
{
   sellerGoods.value[i].goodPic = 'http://' + sellerGoods.value[i].goodPic.substring(7).substring(0, 14) + ':' + sellerGoods.value[i].goodPic.substring(7).substring(17)
}
}
onMounted(()=>{getSellerGoods();})

const enterDetail = (id) => {
  router.push(`/AdminDetail/${id}`)
}

const deleteGood = async(id) => {
    ElMessageBox.confirm(
    '确定要彻底删除该商品吗？',
    '确认操作',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
      await AdminDeleteGoodAPI(id);
      setTimeout(() => {
      window.location.reload();  // 1.5秒后刷新页面
      }, 1500);
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '取消操作',
      })
    })
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
        <el-main style="padding-right: 10%; padding-left: 10%; margin-top: 100px;">
          <p style="margin-bottom: 20px; font-size: 18px; text-align: center;"> 商家编号 {{ route.params.id }} </p>
          <el-card v-for="sellerGood in sellerGoods" :key="sellerGood.goodId"
                   shadow="hover"
                   style="margin-bottom: 2%">
            <el-row> 
              <el-col :offset="2" :span="2">
                <!-- 此处图片加载不出来是使用了相对路径，且当前路由比AdminGoods多了一个/导致的问题 实际从后端拿到绝对路径后就没有该问题了 -->
                <el-image :src="sellerGood.goodPic" lazy></el-image>
              </el-col>
              <el-col :offset="2" :span="14">
                <el-row style="margin-bottom: 3%">
                  <el-link type="primary" v-on:click="enterDetail(sellerGood.goodId)">
                    <span style="font-size: 18px"><strong>{{ sellerGood.goodName }}</strong></span>
                  </el-link>
                </el-row>
                <el-row style="margin-top: 5px;">
                  <el-tag type="primary">商品编号<span>&nbsp;&nbsp;{{ sellerGood.goodId }}</span></el-tag>
                </el-row>
              </el-col>
              <el-col :span="2">
                <el-button v-on:click="deleteGood(sellerGood.goodId)" type="danger" size="small">删除</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-main>
    </el-container>
  </div>
</template>