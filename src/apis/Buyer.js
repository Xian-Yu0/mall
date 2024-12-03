import httpRequest from "@/utils/http";

export function BuyerLoginAPI({ account, password }) {
    // return httpRequest({
    //     url: '/buyerlogin',
    //     method: 'POST',
    //     data: { account, password }
    // })
    const nickname = "倪宇轩"
    const sex = "女"
    const birthday = '2024-12-01'
    const desc = "洞天而为，焉有大事不成之理"
    return { result: { account, password, nickname, sex, birthday, desc } }
}

export function BuyerModifyAPI({ account, password, nickname, sex, birthday, desc }) {
    return httpRequest({
        url: '/buyerModify',
        method: 'POST',
        data: { account, password, nickname, sex, birthday, desc }
    })
}

export function getBuyHistoryAPI(account) {
    // return httpRequest({ url: '/buyer/history', params: { account } })
    const orderName = '北航'
    const orderId = 'beihang order id'
    const orderPrice = '11000'
    const orderDate = '2024-11-11'
    const orderGoodId = '666666'
    return { result: [{ orderName, orderId, orderPrice, orderDate, orderGoodId }] }
}

export function BuyerSendNewDiscussAPI({ account, title, content }) {
    // return httpRequest({
    //     url: '/BuyerNewDiscuss',
    //     method: 'POST',
    //     data: { account, title, content }
    // })
}

export function getMyDiscussAPI(account) {
    // return httpRequest({ url: '/BuyerMyDiscuss', params: { account } })
    return { result: [{ DiscussId: '帖子ID', DiscussTitle: '帖子题目' }] }
}

export function BuyerGetDiscussListAPI() {
    // return httpRequest( {url: 'buyer/DiscussList'} )
    let array = [];
    for (let i = 0; i < 9; i++) {
        array.push({ DiscussId: '帖子ID', DiscussTitle: '帖子题目', DiscussTime: '发帖时间', DiscussBy: '发帖人', DiscussByType: '学生' })
    }
    return { result: array }
}

export function BuyerGetDiscussAPI(id) {
    // return httpRequest({ url: '/Discuss', params: { id } })
    return { result: { DiscussTime: '我是时间122222', DiscussByType: '买家', DiscussByName: '我是发帖人昵称', DiscussContent: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容', DiscussById: '12345678' } }
}

export function BuyerDeleteDiscussAPI(id) {
    // return httpRequest( {url: 'deleteDiscuss', params: {id} });
    return 0;
}

export function BuyerSendNewPostAPI({ account, date, postContent }) {
    return httpRequest({
        url: '/BuyerSendNewPost',
        method: 'POST',
        data: { account, date, postContent }
    })
}

export function BuyerGetPostListAPI(id) {
    // return httpRequest({
    //     url: '/BuyerGetPostList',
    //     params: { id }
    // })
    let array = [];
    for (let i = 0; i < 9; i++) {
        array.push({ postId: '1000000', postById: '12345678', postTime: '2024-10-01', postByName: '倪宇轩发的', postByType: '商家', postContent: '我觉得你说的对' });
    }
    return ({ result: array })
}

export function BuyerDeletePostAPI(id, account) {
    return httpRequest({
        url: '/BuyerDeletePost',
        method: 'POST',
        data: { id, account }
    })
}
