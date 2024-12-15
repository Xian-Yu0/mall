
<template>
  <div class="container">
    <h2>添加商品</h2>
    <form @submit.prevent="addGood">
      <div class="form-group">
        <label for="account">商品名称</label>
        <input type="text" id="account" v-model="account" required>
      </div>
      <div class="form-group">
        <label for="name">商品名称</label>
        <input type="text" id="name" v-model="goodName" required>
      </div>
      <div class="form-group">
        <label for="price">商品价格</label>
        <input type="number" id="price" v-model="goodPrice" step="0.01" required>
      </div>
      <div class="form-group">
        <label for="promotion">促销信息</label>
        <textarea id="promotion" v-model="goodPromotion" required></textarea>
      </div>
      <div class="form-group">
        <label for="service">服务信息</label>
        <textarea id="service" v-model="goodService" required></textarea>
      </div>
      <div class="form-group">
        <label for="image">商品图片</label>
        <input type="file" id="image" accept="image/*" @change="onImageChange" required>
      </div>
      <button type="submit" class="btn btn-primary">添加商品</button>
    </form>
    <router-link to="/SellerShop" class="btn btn-secondary">返回</router-link>
  </div>
</template>

<script>

import { SellerCreateGoods } from '@/apis/Seller';

export default {
  data() {
    return {
      account:'',
      goodName: '',
      goodPrice: 0,
      goodPromotion: '',
      goodService: '',
      goodPic: null
    };
  },
  methods: {
    addGood() {
      // 在这里调用 SellerCreateGoods 接口
      SellerCreateGoods(this.account, this.goodName, this.goodPrice, this.goodPromotion, this.goodService, this.goodPic)
        .then(response => {
          // 成功处理
          console.log(response);
          // 添加商品后可以重置表单
          this.goodName = '';
          this.goodPrice = 0;
          this.goodPromotion = '';
          this.goodService = '';
          this.goodPic = null;
        })
        .catch(error => {
          // 错误处理
          console.error('Error creating goods:', error);
          // 可以选择在这里处理错误，例如显示错误信息给用户
        });
    },
    onImageChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.goodPic = file;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-primary {
  background-color: #007BFF;
  color: #fff;
}
.btn-secondary {
  background-color: #6C757D;
  color: #fff;
  margin-left: 10px;
}
</style>
