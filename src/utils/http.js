// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
// import { useUserStore } from '@/stores/userStore'
const httpRequest = axios.create({
    baseURL: 'http://113.44.213.129:1234',    // TODO
    timeout: 5000
})

// 拦截器

// axios请求拦截器
// httpRequest.interceptors.request.use(config => {
//     // 1. 从pinia获取token数据
//     const userStore = useUserStore()
//     // 2. 按照后端的要求拼接token数据
//     const token = userStore.userInfo.token
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
// }, e => Promise.reject(e))

// // axios响应式拦截器
// httpRequest.interceptors.response.use(res => res.data, e => {
//     // 统一错误提示
//     ElMessage({
//         type: 'warning',
//         message: e.response.data.message
//     })
//     return Promise.reject(e)
// })


export default httpRequest