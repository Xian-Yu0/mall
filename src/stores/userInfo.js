import { defineStore } from 'pinia'
import { ref } from 'vue'
import { BuyerLoginAPI } from '@/apis/Buyer'
import { AdminLoginAPI } from '@/apis/Admin'
import { ElMessage } from 'element-plus'

export const useBuyerStore = defineStore('buyer', () => {
    const buyerInfo = ref({})   // 用户数据
    // 登录
    const setBuyerInfo = async ({ account, password }) => {
        const res = await BuyerLoginAPI(account, password)
        if (res.result.account == '') {
            ElMessage({
                message: '账号或密码错误',
                type: 'error',
            })
            return -1;
        }
        buyerInfo.value = res.result;
    }
    // 退出登录
    const clearBuyerInfo = () => {
        buyerInfo.value = {}
    }
    return {
        buyerInfo,
        setBuyerInfo,
        clearBuyerInfo
    }
}, {
    persist: true,
})


export const useAdminStore = defineStore('admin', () => {
    const adminInfo = ref({})   // 管理员数据
    // 登录
    const setAdminInfo = async ({ account, password }) => {
        const res = await AdminLoginAPI(account, password)
        if (res.result.account == '') {
            ElMessage({
                message: '账号或密码错误',
                type: 'error',
            })
            return -1;
        }
        adminInfo.value = res.result;
    }
    // 退出登录
    const clearAdminInfo = () => {
        adminInfo.value = {}
    }
    return {
        adminInfo,
        setAdminInfo,
        clearAdminInfo
    }
}, {
    persist: true,
})