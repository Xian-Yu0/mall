import httpRequest from "@/utils/http";

export function BuyerLoginAPI(account, password) {
    // return httpRequest({
    //     url: '/BuyerLogin',
    //     method: 'POST',
    //     data: { account, password }
    // })
    const nickname = "倪宇轩"
    const sex = "女"
    const birthday = '2024-12-01'
    const desc = "洞天而为，焉有大事不成之理"
    return { result: { account, password, nickname, sex, birthday, desc } }
}

export function BuyerModifyAPI(account, password, nickname, sex, birthday, desc) {
    return httpRequest({
        url: '/BuyerModify',
        method: 'POST',
        data: { account, password, nickname, sex, birthday, desc }
    })
}

export function BuyerGetHistoryAPI(account) {
    // return httpRequest({ url: '/BuyerGetHistory', params: { account } })
    const orderName = '北航'
    const orderId = 'beihang order id'
    const orderNum = 4
    const orderPrice = '11000'
    const orderDate = '2024-11-11'
    const orderGoodId = '666666'
    const orderPos = '北京市北京航空航天大学'
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push({ orderName, orderId, orderNum, orderPrice, orderDate, orderGoodId, orderPos })
    }
    return { result: array }
}

export function BuyerCreateDiscussAPI(account, date, title, content) {
    // return httpRequest({
    //     url: '/BuyerCreateDiscuss',
    //     method: 'POST',
    //     data: { account, date, title, content }
    // })
}

export function BuyerCreatePostAPI(account, date, postContent) {
    return httpRequest({
        url: '/BuyerCreatePost',
        method: 'POST',
        data: { account, date, postContent }
    })
}

export function BuyerGetMyDiscussAPI(account) {
    // return httpRequest({ url: '/BuyerGetMyDiscuss', params: { account } })
    return { result: [{ DiscussId: '帖子ID', DiscussTitle: '帖子题目' }] }
}

export function BuyerCreateCommentAPI(account, date, content, score, goodId) {
    return httpRequest({
        url: '/BuyerCreateComment',
        method: 'POST',
        data: { account, date, content, score, goodId }
    })
}