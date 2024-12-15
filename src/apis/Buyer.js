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
    const orderName = '洗护套装'
    const orderId = '20308428013231'
    const orderNum = 4
    const orderPrice = 1870
    const orderDate = '2024-11-11'
    const orderGoodId = '12374811'
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
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push({ DiscussId: '我的帖子的ID', DiscussTitle: '我的帖子的题目', DiscussTime: '发帖时间', DiscussBy: '发帖人', DiscussByType: '消费者' })
    }
    // Time类均为xxxx-xx-xx格式
    return { result: array }
}

export function BuyerCreateCommentAPI(account, date, content, score, goodId) {
    return httpRequest({
        url: '/BuyerCreateComment',
        method: 'POST',
        data: { account, date, content, score, goodId }
    })
}

export function BuyerAllocAccountAPI() {
    // return httpRequest({
    //     url: '/BuyerAllocAccount',
    // })
    return { result: '24370000' }
}

export function BuyerRegisterAPI(account, nickname, sex, birthday, password, desc) {
    return httpRequest({
        url: '/BuyerRegister',
        method: 'POST',
        data: { account, nickname, sex, birthday, password, desc }
    })
}

export function BuyerCreateOrderAPI(account, orderGoodId, orderDate, orderNum, orderPrice, orderPos) {
    return httpRequest({
        url: '/BuyerCreateOrder',
        method: 'POST',
        data: { account, orderGoodId, orderDate, orderNum, orderPrice, orderPos }
    })
}