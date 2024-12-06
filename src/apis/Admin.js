import httpRequest from "@/utils/http";

export function AdminLoginAPI(account, password) {
    // return httpRequest({
    //     url: '/adminlogin',
    //     method: 'POST',
    //     data: { account, password }
    // })
    const nickname = "管理员A"
    const sex = "女"
    const birthday = '2024-12-01'
    const desc = "洞天而为，焉有大事不成之理"
    return { result: { account, password, nickname, sex, birthday, desc } }
}

export function AdminCreateDiscussAPI(account, date, title, content) {
    return httpRequest({
        url: '/AdminCreateDiscuss',
        method: 'POST',
        data: { account, date, title, content }
    })
}

export function AdminCreatePostAPI(account, date, postContent) {
    return httpRequest({
        url: '/AdminCreatePost',
        method: 'POST',
        data: { account, date, postContent }
    })
}

export function AdminGetMyDiscussAPI(account) {
    // return httpRequest({ url: '/AdminGetMyDiscuss', params: { account } })
    return { result: [{ DiscussId: '帖子ID', DiscussTitle: '帖子题目' }] }
}

export function AdminGetGoodsAPI() {
    // return httpRequest({
    //     url: '/AdminGetGoods'
    // })
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push({
            goodName: '商品名', goodBySellerId: '114514', goodId: '1919810', goodPic: 'src/apis/pic/2.png'
        })
    }
    return { result: array }
}

export function AdminDeleteGoodAPI(id) {
    // return httpRequest({
    //     url: '/AdminDeleteGood',
    //     params: { id }
    // })
    return 0
}

export function AdminSearchGoodAPI(name) {
    // return httpRequest({
    //     url: '/AdminSearchGood',
    //     params: { name }
    // })
    let array = []
    for (let i = 0; i < 4; i++) {
        array.push({
            goodName: '搜到的商品名', goodBySellerId: '114514', goodId: '1919810', goodPic: 'src/apis/pic/2.png'
        })
    }
    return { result: array }
}

export function AdminGetSellersAPI() {
    // return httpRequest({
    //     url: '/AdminGetSellers'
    // })
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push({ sellerName: '商家名称', sellerId: '114514' })
    }
    return { result: array }
}

export function AdminSearchSellerAPI(name) {
    // return httpRequest({
    //     url: '/AdminSearchSeller',
    //     params: {name}
    // })
    console.log(name)
    let array = []
    for (let i = 0; i < 4; i++) {
        array.push({ sellerName: '搜到的商家名', sellerId: '114514' })
    }
    return { result: array }
}

export function AdminGetSellerGoodsAPI(id) {
    // return httpRequest({
    //     url: '/AdminGetSellerGoods',
    //     params: {id}
    // })
    let array = []
    for (let i = 0; i < 6; i++) {
        array.push({
            goodName: '商家的商品名', goodId: '1919810', goodPic: 'src/apis/pic/2.png'
        })
    }
    return { result: array }
}