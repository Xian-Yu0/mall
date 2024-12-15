import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import BuyerLogin from '@/views/Buyer/BuyerLogin.vue'
import BuyerModify from '@/views/Buyer/BuyerModify.vue'
import BuyerHistory from '@/views/Buyer/BuyerHistory.vue'
import BuyerHome from '@/views/Buyer/BuyerHome.vue'
import BuyerDiscussTable from '@/views/Buyer/BuyerDiscussTable.vue'
import BuyerDiscuss from '@/views/Buyer/BuyerDiscuss.vue'
import BuyerDetail from '@/views/Buyer/BuyerDetail.vue'
import AdminLogin from '@/views/Admin/AdminLogin.vue'
import AdminSellers from '@/views/Admin/AdminSellers.vue'
import AdminGoods from '@/views/Admin/AdminGoods.vue'
import AdminHome from '@/views/Admin/AdminHome.vue'
import AdminDiscussTable from '@/views/Admin/AdminDiscussTable.vue'
import AdminDiscuss from '@/views/Admin/AdminDiscuss.vue'
import AdminDetail from '@/views/Admin/AdminDetail.vue'
import AdminSellerGoods from '@/views/Admin/AdminSellerGoods.vue'
import HomeDetail from '@/views/Home/components/HomeDetail.vue'
import BuyerRegister from '@/views/Buyer/BuyerRegister.vue'

import SellerDetail from '@/views/Seller/SellerDetail.vue'
import SellerDiscuss from '@/views/Seller/SellerDiscuss.vue'
import SellerHome from '@/views/Seller/SellerHome.vue'
import SellerLogin from '@/views/Seller/SellerLogin.vue'
import SellerRegister from '@/views/Seller/SellerRegister.vue'
import SellerModify from '@/views/Seller/SellerModify.vue'
import SellerDiscussTable from '@/views/Seller/SellerDiscussTable.vue'
import SellerShop from '@/views/Seller/SellerShop.vue'
import BuildGood from '@/views/Seller/BuildGood.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HomeDetail/:id',
      name: 'HomeDetail',
      component: HomeDetail
    },
    {
      path: '/BuyerLogin',
      name: 'BuyerLogin',
      component: BuyerLogin
    },
    {
      path: '/SellerLogin',
      name: 'SellerLogin',
      component: SellerLogin
    },
    {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/BuyerRegister',
      name: 'BuyerRegister',
      component: BuyerRegister
    },
    {
      path: '/SellerRegister',
      name: 'SellerRegister',
      component: SellerRegister
    },

    {
      path: '/BuyerHome',
      name: 'BuyerHome',
      component: BuyerHome,
    },
    {
      path: '/SellerHome',
      name: 'SellerHome',
      component: SellerHome
    },
    {
      path: '/AdminHome',
      name: 'AdminHome',
      component: AdminHome
    },
    {
      path: '/BuyerModify',
      name: 'BuyerModify',
      component: BuyerModify
    },
    {
      path: '/BuyerHistory',
      name: 'BuyerHistory',
      component: BuyerHistory
    },
    {
      path: '/BuyerDiscussTable',
      name: 'BuyerDiscussTable',
      component: BuyerDiscussTable
    },
    {
      path: '/BuyerDiscuss/:id',
      name: 'BuyerDiscuss',
      component: BuyerDiscuss
    },
    {
      path: '/BuyerDetail/:id',
      name: 'BuyerDetail',
      component: BuyerDetail
    },
    {
      path: '/SellerDetail/:id',
      name: 'SellerDetail',
      component: SellerDetail
    },
    {
      path: '/SellerDiscuss/:id',
      name: 'SellerDiscuss',
      component: SellerDiscuss
    },
    {
      path: '/SellerModify',
      name: 'SellerModify',
      component: SellerModify
    },
    {
      path: '/SellerShop',
      name: 'SellerShop',
      component: SellerShop
    },
    {
      path: '/AdminSellers',
      name: 'AdminSellers',
      component: AdminSellers
    },
    {
      path: '/AdminGoods',
      name: 'AdminGoods',
      component: AdminGoods
    },
    // // 管理员的“查看所有主题帖”即进入论坛
    {
      path: '/AdminDiscussTable',
      name: 'AdminDiscussTable',
      component: AdminDiscussTable
    },
    {
      path: '/AdminDiscuss/:id',
      name: 'AdminDiscuss',
      component: AdminDiscuss
    },
    {
      path: '/AdminDetail/:id',
      name: 'AdminDetail',
      component: AdminDetail
    },
    {
      path: '/AdminSellerGoods/:id',
      name: 'AdminSellerGoods',
      component: AdminSellerGoods
    },
    // 查看帖子
    {
      path: '/BuyerDiscussTable',
      name: 'BuyerDiscussTable',
      component: BuyerDiscussTable
    },
    {
      path: '/SellerDiscussTable',
      name: 'SellerDiscussTable',
      component: SellerDiscussTable
    },
    {
      path: '/BuildGood',
      name: 'BuildGood',
      component: BuildGood
    }

    // 以下被用Detail代替
    // // 进入商品详情页
    // {
    //   path: '/BuyerGood',
    //   name: 'BuyerGood',
    //   component: BuyerGood
    // },
    // {
    //   path: '/SellerGood',
    //   name: 'SellerGood',
    //   component: SellerGood
    // },
    // {
    //   path: '/AdminGood',
    //   name: 'AdminGood',
    //   component: AdminGood
    // }

    // 卖家修改商品信息、管理员/卖家删除商品等：以后再说
    // 卖家不支持购买商品，卖家购买商品应该自己再注册一个买家的账号，而不应该把那么多功能耦合到一起

  ],
  scrollBehavior(to, from, savedPosition) {
    // 返回一个滚动位置
    return { top: 0 }; // 强制滚动到顶部
  }
})

export default router
