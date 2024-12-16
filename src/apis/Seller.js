import httpRequest from "@/utils/http";

export function SellerLoginAPI(account, password) {
    // return httpRequest({
    //     url: '/SellerLogin',
    //     method: 'POST',
    //     data: { account, password }
    // })
    const nickname = "韩昕睿"
    const sex = "女"
    const birthday = '0001-01-01'
    const desc = "我就是最强的"
    return { result: { account, password, nickname, sex, birthday, desc } }
}

//更改信息
export function SellerModifyAPI(account, password, nickname, sex, birthday, desc) {
    return httpRequest({
        url: '/SellerModify',
        method: 'POST',
        data: { account, password, nickname, sex, birthday, desc }
    })
}

//

export function SellerCreateDiscussAPI(account, date, title, content) {
    return httpRequest({
        url: '/SellerCreateDiscuss',
        method: 'POST',
        data: { account, date, title, content }
    })
}

export function SellerCreatePostAPI(account, discussID, date, postContent) {
    // return httpRequest({
    //     url: '/SellerCreatePost',
    //     method: 'POST',
    //     data: { account, discussID, date, postContent }
    // })
    return 0
}

export function SellerGetMyDiscussAPI(account) {
    // return httpRequest({ url: '/SellerGetMyDiscuss', params: { account } })
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push({ DiscussId: '我的帖子的ID', DiscussTitle: '我的帖子的题目', DiscussTime: '发帖时间', DiscussBy: '发帖人', DiscussByType: '商家' })
    }
    // Time类均为xxxx-xx-xx格式
    return { result: array }
}

export function SellerCreateCommentAPI(account, date, content, score, goodId) {
    return httpRequest({
        url: '/SellerCreateComment',
        method: 'POST',
        data: { account, date, content, score, goodId }
    })
}

export function SellerAllocAccountAPI() {
    // return httpRequest({
    //     url: '/SellerAllocAccount',
    // })
    return { result: '24370000' }
}

export function SellerRegisterAPI(account, nickname, sex, birthday, password, desc) {
    return httpRequest({
        url: '/SellerRegister',
        method: 'POST',
        data: { account, nickname, sex, birthday, password, desc }
    })
}



export function SellerDeleteGoodAPI(id) {
    // return httpRequest({
    //     url: '/SellerDeleteGood',
    //     params: { id }
    // })
    return 0
}



export function SellerGetSellerGoodsAPI(id) {
    // return httpRequest({
    //     url: '/SellerGetSellerGoods',
    //     params: {id}
    // })
    let array = []
    for (let i = 0; i < 6; i++) {
        array.push({
            goodName: '商家的商品名', goodId: '1919810', goodPic: '../src/assets/DemoPic/2.png'
        })
    }
    return { result: array }

}


export function SellerCreateGoods(account, goodName, goodPrice, goodPromotion, goodServe, goodPic) {
    return httpRequest({
        url: '/SellerCreateGoods',
        method: 'POST',
        data: { account, goodName, goodPrice, goodPromotion, goodServe, goodPic }
    })
}