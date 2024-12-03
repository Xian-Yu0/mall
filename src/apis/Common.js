import httpRequest from "@/utils/http";


// export function getDiscussAPI(id) {
//     // return httpRequest({ url: '/Discuss', params: { id } })
//     return { result: { DiscussTime: '我是时间122222', DiscussByType: '学生', DiscussByName: '我是发帖人昵称', DiscussContent: '我是内容', DiscussById: '12345678' } }
// }

// export function deleteDiscussAPI(id) {
//     // return httpRequest( {url: 'deleteDiscuss', params: {id} });
//     return 0;
// }

export function getGoodDetailAPI(id) {
    // return httpRequest( {url: '/goodDetail'} )
    return { result: { goodName: '我是商品名字', goodSellNum: '233', goodCommentNum: '1111', goodSeller: '商家名称', goodDesc: '商品描述', goodPrice: '10000', goodDiscount: { cuxiao: '12月直降100元', fuwu: '全国包邮，无忧退货' } } }
}

export function getDetailCommentAPI(id) {
    // return httpRequest({
    //     url: '/BuyerGetDetailComment',
    //     params: { id }
    // })
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push({ commentByName: '评论者昵称', commentById: '评论者ID', CommentTime: '评论时间', CommentContent: '评论内容' })
    }
    return { result: array }
}
