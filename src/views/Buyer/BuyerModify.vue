<script setup>
import { BuyerModifyAPI } from '@/apis/Buyer';
import BuyerNav from './BuyerNav.vue';
import { useBuyerStore } from '@/stores/userInfo';
import { reactive } from 'vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import BuyerHeader from './BuyerHeader.vue';

const buyerInfo = useBuyerStore().buyerInfo;
const form = reactive({
  nickname: buyerInfo.nickname,
  birthday: buyerInfo.birthday,
  password: buyerInfo.password,
  desc: buyerInfo.desc,
  sex: buyerInfo.sex
})

const router = useRouter()
const submitForm = async () => {
  const account = buyerInfo.account;
  const nickname = form.nickname;
  const password = form.password;
  const sex = form.sex;
  const birthday = new Date(form.birthday).toLocaleDateString('en-CA');
  const desc = form.desc;
  if (password.length < 6 || password.length > 14) {
    ElMessage({
      message: '密码长度不少于6位，不多于14位',
      type: 'error',
    })
    return;
  }
  // const temp = await BuyerModifyAPI(account, password, nickname, sex, birthday, desc)
  ElMessage({
    message: '提交成功!',
    type: 'success'
  })
  router.push('/BuyerHome')
}

const resetForm = () => {
  form.nickname = buyerInfo.nickname;
  form.sex = buyerInfo.sex;
  form.birthday = buyerInfo.birthday;
  form.password = buyerInfo.password;
  form.desc = buyerInfo.desc;
}

</script>

<template>
  <BuyerNav></BuyerNav>
  <BuyerHeader></BuyerHeader>
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
        <el-date-picker v-model="form.birthday" type="date" placeholder="选择您的出生日期" style="width: 100%" />
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