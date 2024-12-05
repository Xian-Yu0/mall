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

