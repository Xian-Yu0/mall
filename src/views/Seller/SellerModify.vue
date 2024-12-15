<script setup>
import { SellerModifyAPI } from '@/apis/Seller';
import SellerNav from './SellerNav.vue';
import { useSellerStore } from '@/stores/userInfo';
import { reactive } from 'vue'
import { ElMessage } from 'element-plus';
import SellerHeader from './SellerHeader.vue';

const sellerInfo = useSellerStore().sellerInfo;
const form = reactive({
  nickname: sellerInfo.nickname,
  birthday: sellerInfo.birthday,
  password: sellerInfo.password,
  desc: sellerInfo.desc,
  sex: sellerInfo.sex
})

const submitForm = async () =>
{
  const account = sellerInfo.account;
  const nickname = form.nickname;
  const password = form.password;
  const sex = form.sex;
  const birthday = new Date(form.birthday).toLocaleDateString('en-CA');
  const desc = form.desc;
  if (password.length < 6 || password.length > 14)
  {
    ElMessage({
    message: '密码长度不少于6位，不多于14位',
    type: 'error',
  })
  }
  // const temp = await SellerModifyAPI(account, password, nickname, sex, birthday, desc)
}

const resetForm = () => {
  form.nickname = sellerInfo.nickname;
  form.sex = sellerInfo.sex;
  form.birthday = sellerInfo.birthday;
  form.password = sellerInfo.password;
  form.desc = sellerInfo.desc;
}

</script>

<template>
    <SellerNav></SellerNav>
    <SellerHeader></SellerHeader>
    <h1 class="className"> 修改您的基本信息</h1>
  <el-form :model="form" label-width="auto" style="max-width: 600px; margin: 20px auto; height: 500px;" ref="formRef">
    <el-form-item label="您的昵称">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="您的性别" style="width: 56%;">
      <el-select v-model="form.sex" placeholder="选择您的性别">
        <el-option label="男" value="man" />
        <el-option label="女" value="woman" />
      </el-select>
    </el-form-item>
    <el-form-item label="您的出生日期">
      <el-col :span="11">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择您的出生日期"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="您的密码" prop="pass">
      <el-input v-model="form.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="您的个性签名">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item style="margin: 0 auto;">
      <el-button type="primary" @click="submitForm()">确认提交</el-button>
      <el-button @click="resetForm(formRef)">重置修改</el-button>
    </el-form-item>
  </el-form>
</template>

<style>
.className {
    text-align: center;
    color: #1dc778;
    font-weight: 500;
    margin-top: 40px;
}
</style>