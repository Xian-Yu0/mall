import httpRequest from "@/utils/http";

export function SellerLoginAPI(account, password) {
    return httpRequest({
        url: 'api/SellerLogin/',
        method: 'POST',
        data: { account, password }
    })
}

//更改信息
export function SellerModifyAPI(account, password, nickname, sex, birthday, desc) {
    return httpRequest({
        url: 'api/SellerModify/',
        method: 'POST',
        data: { account, password, nickname, sex, birthday, desc }
    })
}

//

export function SellerCreateDiscussAPI(account, date, title, content) {
    return httpRequest({
        url: 'api/SellerCreateDiscuss/',
        method: 'POST',
        data: { account, date, title, content }
    })
}

export function SellerCreatePostAPI(account, discussID, date, postContent) {
    return httpRequest({
        url: 'api/SellerCreatePost/',
        method: 'POST',
        data: { account, discussID, date, postContent }
    })
}

export function SellerGetMyDiscussAPI(account) {
    return httpRequest({ url: 'api/SellerGetMyDiscuss/', params: { account } })
}

export function SellerCreateCommentAPI(account, date, content, score, goodId) {
    return httpRequest({
        url: 'api/SellerCreateComment/',
        method: 'POST',
        data: { account, date, content, score, goodId }
    })
}

export function SellerAllocAccountAPI() {
    return httpRequest({
        url: 'api/SellerAllocAccount/',
    })
}

export function SellerRegisterAPI(account, nickname, sex, birthday, password, desc) {
    return httpRequest({
        url: 'api/SellerRegister/',
        method: 'POST',
        data: { account, nickname, sex, birthday, password, desc }
    })
}



export function SellerDeleteGoodAPI(id) {
    return httpRequest({
        url: 'api/SellerDeleteGood/',
        params: { id }
    })
}



export function SellerGetSellerGoodsAPI(id) {
    return httpRequest({
        url: 'api/SellerGetSellerGoods/',
        params: {id}
    })

}


// export function SellerCreateGoods(account, goodName, goodPrice, goodPromotion, goodServe, goodPic) {
//     return httpRequest({
//         url: 'api/SellerCreateGoods/',
//         method: 'POST',
//         data: { account, goodName, goodPrice, goodPromotion, goodServe, goodPic }
//     })
// }

export function SellerCreateGoods(formData) {
    return httpRequest({
        url: 'api/SellerCreateGoods/',
        method: 'POST',
        data: formData 
    })
}