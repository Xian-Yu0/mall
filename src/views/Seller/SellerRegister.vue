<script setup>

import { onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from 'vue-router'
import { SellerAllocAccountAPI, SellerRegisterAPI } from '@/apis/Seller';


const newAccount = ref('')
const allocAccount = async() => {
    const temp = await SellerAllocAccountAPI();
    newAccount.value = temp.result;
    form.value.account = newAccount.value + ' (系统分配)'
}
onMounted(()=>{allocAccount()});


// 1. 准备表单对象
const form = ref({
  account: '',
  nickname: '',
  sex: '',
  birthday: '',
  password: '',
  desc: ''
})

// 2. 准备规则对象
const rules = {
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码长度为6-14个字符', trigger: 'blur' },
  ],
  nickname: [
    { required: true, message: '请设置一个昵称', trigger: 'blur' },
  ],
}

// 3. 获取form实例做统一校验
const formRef = ref(null)
const router = useRouter()
const submitForm = async() => {
    form.value.birthday = new Date(form.value.birthday).toLocaleDateString('en-CA');  // en-CA 是 ISO 格式 yyyy-MM-dd
    formRef.value.validate(async (valid) => {
    if (valid) {
    ElMessageBox.confirm(
    '我同意隐私条款和服务条款',
    '隐私和服务条款',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      // 若不需要隐私和服务条款，则只需保留这几行
      ElMessage({ type: 'success', message: '注册成功' })
      console.log(newAccount.value, form.value.nickname, form.value.sex, form.value.birthday, form.value.password, form.value.desc);
      // await SellerRegisterAPI(newAccount.value, form.value.nickname, form.value.sex, form.value.birthday, form.value.password, form.value.desc);
      setTimeout(() => {router.replace({path: '/SellerLogin'})}, 1500);
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '同意条款后方可使用服务',
      })
    })
    }
  })
}
</script>


<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">商家注册</a>
        </nav>
        <div class="account-box">
          <div class="form">

<el-form :model="form" label-width="auto" :rules="rules" style="max-width: 600px; margin: 20px auto;" ref="formRef">
    <el-form-item label="您的账号">
      <el-input v-model="form.account" disabled/>
    </el-form-item>
    <el-form-item label="您的昵称" prop="nickname">
      <el-input v-model="form.nickname" />
    </el-form-item>
    <el-form-item label="您的性别" style="width: 70%;">
      <el-select v-model="form.sex" placeholder="选择您的性别">
        <el-option label="男" value="man" />
        <el-option label="女" value="woman" />
      </el-select>
    </el-form-item>
    <el-form-item label="您的出生日期">
      <el-col :span="16">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择您的出生日期"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="您的密码" prop="password">
      <el-input v-model="form.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="您的个性签名">
      <el-input v-model="form.desc" type="textarea" :rows="2"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()" style="margin: 0 auto; width: 150px;">点击注册</el-button>
    </el-form-item>
</el-form>

          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang='scss'>
.login-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
    }
  }

  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }

  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;

    i {
      font-size: 14px;
      color: $xtxColor;
      letter-spacing: -5px;
    }
  }
}

.login-section {
  background: url('@/assets/images/login-bg.png') no-repeat center / cover;
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 33%;
    top: 10px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }
  }
}

.login-footer {
  padding: 30px 0 50px;
  background: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~a {
        border-left: 1px solid #ccc;
      }
    }
  }
}

.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: $xtxColor;

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        >i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;

          &.error {
            border-color: $priceColor;
          }

          &.active,
          &:focus {
            border-color: $xtxColor;
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: #069;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: $xtxColor;

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.subBtn {
  background: $xtxColor;
  width: 100%;
  color: #fff;
}
</style>