<script setup>
defineProps({
  To: {
    type: String,
    default: () => { }
  }
})

import { getGoodsAPI } from '@/apis/Home';
import { onMounted, ref } from 'vue';
import GoodItem from './GoodItem.vue';

const GoodList = ref([])
const getGoods = async () => {
  const temp = await getGoodsAPI()     //不一样
  GoodList.value = temp.data.result            //不一样
  for (let i = 0; i < GoodList.value.length; i++)
{
  GoodList.value[i].picture = 'http://' + GoodList.value[i].picture.substring(7).substring(0, 14) + ':' + GoodList.value[i].picture.substring(7).substring(17)
}
}
onMounted(() => {getGoods()})
</script>

<template>
  <div class="container ">
    <div class="sub-container">
      <!-- 是在div滚动到底时执行操作，所以属性应加在div上 -->
      <div class="body">
         <!-- 商品列表-->
          <GoodItem v-for="item in GoodList" :good="item" :To="To" :key="item.id"/>
          <!-- 列表无限加载的实现：检测到触底时获取第page+1页处的数据，然后与老数据拼接 -->
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>