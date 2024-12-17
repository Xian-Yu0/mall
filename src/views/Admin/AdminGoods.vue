<script setup>
import { onMounted, ref } from 'vue';
import AdminHeader from './AdminHeader.vue';
import AdminNav from './AdminNav.vue';
import { AdminDeleteGoodAPI, AdminGetGoodsAPI, AdminSearchGoodAPI } from '@/apis/Admin';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import 'element-plus/theme-chalk/el-message-box.css';

const router = useRouter();

const goods = ref([])
const getGoods = async () => {
  const temp = await AdminGetGoodsAPI();
  goods.value = temp.data.result;
  for (let i = 0; i < goods.value.length; i++)
{
   goods.value[i].goodPic = 'http://' + goods.value[i].goodPic.substring(7).substring(0, 14) + ':' + goods.value[i].goodPic.substring(7).substring(17)
}
  searchInput.value = ''
}
onMounted(()=>{getGoods();})

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

const searchInput = ref('')
const searchGood = async() => {
  const temp = await AdminSearchGoodAPI(searchInput.value)
  goods.value = temp.data.result
  for (let i = 0; i < goods.value.length; i++)
{
   goods.value[i].goodPic = 'http://' + goods.value[i].goodPic.substring(7).substring(0, 14) + ':' + goods.value[i].goodPic.substring(7).substring(17)
}
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
        <el-main style="padding-right: 10%; padding-left: 10%">
          <el-row style="margin-top: 80px; margin-bottom: -40px;">
            <el-col :span="19">
              <el-input
                placeholder="查找商品"
                prefix-icon="el-icon-search" v-model="searchInput"
                style="margin-bottom: 5%"></el-input>
            </el-col>
            <el-col :span="2" style="margin-left: 20px;">
              <el-button
                type="primary"
                @click="searchGood">
                搜索商品
              </el-button>
            </el-col>
            <el-col :span="2" style="margin-left: 10px;">
              <el-button
                type="primary"
                @click="getGoods">
                查看全部商品
              </el-button>
            </el-col>
          </el-row>
          <el-card v-for="good in goods" :key="good.goodId"
                   shadow="hover"
                   style="margin-bottom: 2%">
            <el-row> 
              <el-col :offset="2" :span="2">
                <el-image :src="good.goodPic" lazy></el-image>
              </el-col>
              <el-col :offset="2" :span="14">
                <el-row style="margin-bottom: 3%">
                  <el-link type="primary" v-on:click="enterDetail(good.goodId)">
                    <span style="font-size: 18px"><strong>{{ good.goodName }}</strong></span>
                  </el-link>
                </el-row>
                <el-row style="margin-top: 20px;">
                  <el-tag type="primary">商家编号<span>&nbsp;&nbsp;{{ good.goodBySellerId }}</span></el-tag>
                </el-row>
                <el-row style="margin-top: 5px;">
                  <el-tag type="primary">商品编号<span>&nbsp;&nbsp;{{ good.goodId }}</span></el-tag>
                </el-row>
              </el-col>
              <el-col :span="2">
                <el-button v-on:click="deleteGood(good.goodId)" type="danger" size="small">删除</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-main>
    </el-container>
  </div>
</template>