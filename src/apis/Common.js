import httpRequest from "@/utils/http";


// export function getDiscussAPI(id) {
//     // return httpRequest({ url: '/Discuss', params: { id } })
//     return { result: { DiscussTime: '我是时间122222', DiscussByType: '学生', DiscussByName: '我是发帖人昵称', DiscussContent: '我是内容', DiscussById: '12345678' } }
// }

// export function deleteDiscussAPI(id) {
//     // return httpRequest( {url: 'deleteDiscuss', params: {id} });
//     return 0;
// }

export function GetGoodDetailAPI(id) {
    // return httpRequest( {
    //     url: '/GetGoodDetail',
    //     params: { id }
    // } )
    return { result: { goodName: '我是商品名字', goodPic: "../src/assets/DemoPic/2.png", goodSellNum: 233, goodCommentNum: 1111, goodScore: 3.7, goodSeller: '商家名称', goodDesc: '商品描述', goodPrice: 10000, goodDiscount: { cuxiao: '12月直降3000元', fuwu: '全国包邮，无忧退货' } } }
}

export function GetDetailCommentAPI(id) {
    // return httpRequest({
    //     url: '/GetDetailComment',
    //     params: { id }
    // })
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push({ commentId: '245422444', commentByName: '评论者昵称', commentById: '评论者ID', CommentTime: '2024-12-04', CommentContent: '评论内容', CommentScore: 4 })
    }
    return { result: array }
}

export function GetDiscussListAPI() {
    // return httpRequest( {url: '/GetDiscussList'} )
    let array = [];
    for (let i = 0; i < 9; i++) {
        array.push({ DiscussId: '帖子ID', DiscussTitle: '帖子题目', DiscussTime: '发帖时间', DiscussBy: '发帖人', DiscussByType: '普通用户' })
    }
    // Time类均为xxxx-xx-xx格式
    return { result: array }
}

export function SearchDiscussAPI(name) {
    // return httpRequest({
    //     url: '/SearchDiscuss',
    //     params: { name }
    // })
    let array = [];
    for (let i = 0; i < 4; i++) {
        array.push({ DiscussId: '搜到的帖子ID', DiscussTitle: '搜到的帖子题目', DiscussTime: '发帖时间', DiscussBy: '发帖人', DiscussByType: '普通用户' })
    }
    // Time类均为xxxx-xx-xx格式
    return { result: array }
}

export function GetDiscussAPI(id) {
    // return httpRequest({ url: '/GetDiscuss', params: { id } })
    return { result: { DiscussTime: '我是时间122222', DiscussByType: '买家', DiscussByName: '我是发帖人昵称', DiscussContent: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容', DiscussById: '12345678' } }
}

export function DeleteDiscussAPI(id) {
    // return httpRequest( {url: '/DeleteDiscuss', params: {id} });
    return 0;
}

export function GetPostListAPI(id) {
    // return httpRequest({
    //     url: '/GetPostList',
    //     params: { id }
    // })
    let array = [];
    for (let i = 0; i < 9; i++) {
        array.push({ postId: '1000000', postById: '12345678', postTime: '2024-10-01', postByName: '倪宇轩发的', postByType: '商家', postContent: '我觉得你说的对' });
    }
    return ({ result: array })
}

export function DeletePostAPI(id) {
    // return httpRequest({
    //     url: '/DeletePost',
    //     params: { id }
    // })
    return 0
}

export function DeleteCommentAPI(id) {
    // return httpRequest({
    //     url: '/DeleteComment',
    //     params: { id }
    // })
    return 0
}