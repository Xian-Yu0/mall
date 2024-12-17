<script setup>
import { onMounted, ref } from 'vue';
import { useBuyerStore } from '@/stores/userInfo';
import { BuyerGetHistoryAPI } from '@/apis/Buyer';
import BuyerNav from './BuyerNav.vue';
import BuyerHeader from './BuyerHeader.vue';

const buyerInfo = useBuyerStore().buyerInfo;

const historyList = ref([]);
const getHistory = async () => {
  const temp = await BuyerGetHistoryAPI(buyerInfo.account);
  historyList.value = temp.data.result;
  console.log(historyList.value)
}
onMounted(() => { getHistory() })
</script>
<template>
  <BuyerNav></BuyerNav>
  <BuyerHeader></BuyerHeader>
  <h1>历史订单</h1>
  <el-button type="primary" @click="$router.push('/BuyerHome')" style="margin-bottom: 10px;">返回主页</el-button>
  <el-descriptions class="list" title="" :column="4" border v-for="history in historyList"
    style="height: 100px; border-bottom: 1px solid #ccc;">
    <el-descriptions-item width="400px" label-width="200px" align='left' label-align='center'>
      <template #label>
        <div class="cell-item">
          商品名称
        </div>
      </template>
      {{ history.orderName }}
    </el-descriptions-item>
    <el-descriptions-item width="400px" label-width="200px" align='left' label-align='center'>
      <template #label>
        <div class="cell-item">
          订单编号
        </div>
      </template>
      {{ history.orderId }}
    </el-descriptions-item>
    <el-descriptions-item width="200px" label-width="100px" align='left' label-align='center'>
      <template #label>
        <div class="cell-item">
          购买件数
        </div>
      </template>
      {{ history.orderNum }}
    </el-descriptions-item>
    <el-descriptions-item width="200px" label-width="100px" align='left' label-align='center'>
      <template #label>
        <div class="cell-item">
          支付金额
        </div>
      </template>
      {{ history.orderPrice }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          购买日期
        </div>
      </template>
      {{ history.orderDate }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          商品链接
        </div>
      </template>
      <RouterLink :to="`/BuyerDetail/${history.orderGoodId}`"> 点击查看商品详情 </RouterLink>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          收货地址
        </div>
      </template>
      {{ history.orderPos }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #1dc779;
  font-weight: 500;
}

.el-descriptions {
  margin-top: 10px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.list {
  margin-top: 20px;
}
</style>