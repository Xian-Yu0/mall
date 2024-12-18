
<template>
    <SellerNav></SellerNav>
    <SellerHeader></SellerHeader>
  <div class="container">
    <h2>添加商品</h2>
    <form @submit.prevent="addGood">
      <div class="form-group">
        <label for="name">商品名称</label>
        <input type="text" id="name" v-model="goodName" required>
      </div>
      <div class="form-group">
        <label for="price">商品价格</label>
        <input type="number" id="price" v-model="goodPrice" step="0.01" required>
      </div>
      <div class="form-group">
        <label for="promotion">商品描述</label>
        <textarea id="promotion" v-model="goodDesc" required></textarea>
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

<script setup>

import { SellerCreateGoods } from '@/apis/Seller';
import { useSellerStore } from '@/stores/userInfo'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SellerNav from './SellerNav.vue';
import SellerHeader from './SellerHeader.vue';

const router = useRouter();
const goodName = ref('')
const goodPrice = ref('')
const goodPromotion = ref('')
const goodService = ref('')
const goodDesc = ref('')
const goodPic = ref(null)
const sellerInfo = useSellerStore().sellerInfo
// const addGood = async() => {
//   const account = sellerInfo.account
//   console.log(account, goodName.value, goodPrice.value, goodPromotion.value, goodService.value, goodPic.value)
//   await SellerCreateGoods(account, goodName.value, goodPrice.value, goodPromotion.value, goodService.value, goodPic.value)
//   // router.push('/SellerShop')
// }
const addGood = async () => {
      const formData = new FormData();
      const account = sellerInfo.account
      formData.append("account", account);
      formData.append("goodName", goodName.value);
      formData.append("goodPrice", goodPrice.value);
      formData.append("goodDesc", goodDesc.value);
      formData.append("goodPromotion", goodPromotion.value);
      formData.append("goodServe", goodService.value);
      formData.append("goodPic", goodPic.value); // 将图片文件加入 FormData

      console.log(formData)
      // 调用 API 上传数据
      await SellerCreateGoods(formData)
      router.push('/SellerShop')
        // .then((response) => {
        //   console.log("商品上传成功", response);
        //   // 获取后端返回的图片 URL
        //   // imageUrl.value = response.image_url; // 设置图片 URL
        // })
        // .catch((error) => {
        //   console.error("商品上传失败", error);
        // });
    };
const onImageChange = (event) => {
      const file = event.target.files[0]; // 获取用户选择的文件
      if (file) {
        goodPic.value = file; // 直接存储文件对象，而不是Base64编码
      }
    };
// export default {
//   data() {
//     return {
//       account:'',
//       goodName: '',
//       goodPrice: 0,
//       goodPromotion: '',
//       goodService: '',
//       goodPic: null
//     };
//   },
//   methods: {
//     addGood() {
//       // 在这里调用 SellerCreateGoods 接口
      
     
//         .then(response => {
//           // 成功处理
//           console.log(response);
//           // 添加商品后可以重置表单
//           this.goodName = '';
//           this.goodPrice = 0;
//           this.goodPromotion = '';
//           this.goodService = '';
//           this.goodPic = null;
//         })
//         .catch(error => {
//           // 错误处理
//           console.error('Error creating goods:', error);
//           // 可以选择在这里处理错误，例如显示错误信息给用户
//         });
//     },
//     onImageChange(e) {
//       const file = e.target.files[0];
//       if (file) {
//         this.goodPic = file;
//       }
//     }
//   }
// };
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

input:focus,
textarea:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.btn-secondary {
  background-color: #42b07c;
  color: #fff;
  margin-left: 450px;
  padding: 12px 24px;
  font-size: 12px;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>
