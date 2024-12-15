<script setup>
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink :to="`/SellerHome`">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          精选好物，超值优惠，尽在航行购物！
        </li>
        <li style="margin-left: -10px;"> <el-button type="success"
            @click="$router.push('/SellerHome')">进入商品首页</el-button> </li>
        <li> <el-button type="success" @click="$router.push('/SellerDiscussTable')">进入官方论坛</el-button> </li>
        <li> <el-button type="success" @click="$router.push('/SellerShop')">我的商店</el-button> </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->


    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 0px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 0px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      // width: 38px;
      font-size: 24px;
      color: #42b07c;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
