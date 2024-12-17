import httpRequest from "@/utils/http";

export function AdminLoginAPI(account, password) {
    return httpRequest({
        url: 'api/adminlogin/',
        method: 'POST',
        data: { account, password }
    })
}

export function AdminCreateDiscussAPI(account, date, title, content) {
    return httpRequest({
        url: 'api/AdminCreateDiscuss/',
        method: 'POST',
        data: { account, date, title, content }
    })
}

export function AdminCreatePostAPI(account, discussID, date, postContent) {
    return httpRequest({
        url: 'api/AdminCreatePost/',
        method: 'POST',
        data: { account, discussID, date, postContent }
    })
}

export function AdminGetMyDiscussAPI(account) {
    return httpRequest({ url: 'api/AdminGetMyDiscuss/', params: { account } })
}

// export function AdminGetMyDiscussAPI(account) {
// return httpRequest({ url: '/AdminGetMyDiscuss', params: { account } })
// return { result: [{ DiscussId: '帖子ID', DiscussTitle: '帖子题目' }] }
// }

export function AdminGetGoodsAPI() {
    return httpRequest({
        url: 'api/AdminGetGoods/'
    })
}

export function AdminDeleteGoodAPI(id) {
    return httpRequest({
        url: 'api/AdminDeleteGood/',
        params: { id }
    })
}

export function AdminSearchGoodAPI(name) {
    return httpRequest({
        url: 'api/AdminSearchGood/',
        params: { name }
    })
}

export function AdminGetSellersAPI() {
    return httpRequest({
        url: 'api/AdminGetSellers/'
    })
}

export function AdminSearchSellerAPI(name) {
    return httpRequest({
        url: 'api/AdminSearchSeller/',
        params: {name}
    })
}

export function AdminGetSellerGoodsAPI(id) {
    return httpRequest({
        url: 'api/AdminGetSellerGoods/',
        params: {id}
    })
}