<script setup>
import { onMounted, ref } from 'vue';
import { useBuyerStore } from '@/stores/userInfo';
import { getBuyHistoryAPI } from '@/apis/Buyer';
import BuyerNav from './BuyerNav.vue';
import BuyerHeader from './BuyerHeader.vue';

const buyerInfo = useBuyerStore().buyerInfo;

const historyList = ref([]);
const getBuyerHistory = async () => {
    const temp = await getBuyHistoryAPI(buyerInfo.account);
    console.log(buyerInfo);
    historyList.value = temp.result;
}

// getBuyerHistory();
onMounted(() => {getBuyerHistory()})
</script>
<template>
    <BuyerNav></BuyerNav>
    <BuyerHeader></BuyerHeader>
    <h1>购物历史</h1>
    <el-button type="primary" @click="$router.replace(`/BuyerHome`)">返回主页</el-button>

  <el-descriptions class="list" title="" :column="3" :size="size" border v-for="history in historyList">
    <el-descriptions-item width="400px" label-width="200px" align='left' label-align='center'>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          商品名称
        </div>
      </template>
      {{ history.orderName }}123
    </el-descriptions-item>
    <el-descriptions-item width="400px" label-width="200px" align='left' label-align='center'>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          订单编号
        </div>
      </template>
      {{ history.orderId }}22222222222
    </el-descriptions-item>
    <el-descriptions-item width="200px" align='left' label-align='center'>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          支付金额
        </div>
      </template>
      {{ history.orderPrice }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          购买日期
        </div>
      </template>
      {{ history.orderDate }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          商品链接
        </div>
      </template>
      <RouterLink :to= "`/good/${history.orderGoodId}`"> 点击查看商品详情 </RouterLink>
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