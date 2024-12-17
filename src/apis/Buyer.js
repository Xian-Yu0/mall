import httpRequest from "@/utils/http";

export function BuyerLoginAPI(account, password) {
    return httpRequest({
        url: 'api/BuyerLogin/',
        method: 'POST',
        data: { account, password }
    })
}

export function BuyerModifyAPI(account, password, nickname, sex, birthday, desc) {
    return httpRequest({
        url: 'api/BuyerModify/',
        method: 'POST',
        data: { account, password, nickname, sex, birthday, desc }
    })
}

export function BuyerGetHistoryAPI(account) {
    return httpRequest({ url: 'api/BuyerGetHistory/', params: { account } })
}

export function BuyerCreateDiscussAPI(account, date, title, content) {
    return httpRequest({
        url: 'api/BuyerCreateDiscuss/',
        method: 'POST',
        data: { account, date, title, content }
    })
}

export function BuyerCreatePostAPI(account, discussID, date, postContent) {
    return httpRequest({
        url: 'api/BuyerCreatePost/',
        method: 'POST',
        data: { account, discussID, date, postContent }
    })
}

export function BuyerGetMyDiscussAPI(account) {
    return httpRequest({ url: 'api/BuyerGetMyDiscuss/', params: { account } })
}

export function BuyerCreateCommentAPI(account, date, content, score, goodId) {
    return httpRequest({
        url: 'api/BuyerCreateComment/',
        method: 'POST',
        data: { account, date, content, score, goodId }
    })
}

export function BuyerAllocAccountAPI() {
    return httpRequest({
        url: 'api/BuyerAllocAccount/',
    })
}

export function BuyerRegisterAPI(account, nickname, sex, birthday, password, desc) {
    return httpRequest({
        url: 'api/BuyerRegister/',
        method: 'POST',
        data: { account, nickname, sex, birthday, password, desc }
    })
}

export function BuyerCreateOrderAPI(account, orderGoodId, orderDate, orderNum, orderPrice, orderPos) {
    return httpRequest({
        url: 'api/BuyerCreateOrder/',
        method: 'POST',
        data: { account, orderGoodId, orderDate, orderNum, orderPrice, orderPos }
    })
}