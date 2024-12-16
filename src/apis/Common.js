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
    return { result: { goodName: '洗护套装', goodPic: "../src/assets/DemoPic/2.png", goodSellNum: 233, goodCommentNum: 1111, goodScore: 3.7, goodSeller: '商家名称', goodDesc: '商品描述', goodPrice: 10000, goodDiscount: { cuxiao: '12月直降3000元', fuwu: '全国包邮，无忧退货' } } }
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
    array.push({ commentId: '245422444', commentByName: '山里灵活', commentById: '评论者ID', CommentTime: '2024-12-04', CommentContent: '商品真不错！', CommentScore: 5 })
    array.push({ commentId: '245422444', commentByName: '我没有名字', commentById: '评论者ID', CommentTime: '2024-12-05', CommentContent: '下次还买', CommentScore: 4 })
    array.push({ commentId: '245422444', commentByName: '凯撒', commentById: '评论者ID', CommentTime: '2024-12-06', CommentContent: '已向亲友推荐', CommentScore: 5 })
    array.push({ commentId: '245422444', commentByName: '凯撒', commentById: '评论者ID', CommentTime: '2024-12-06', CommentContent: '我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐我觉得性价比挺高的已向亲友推荐', CommentScore: 5 })
    return { result: array }
}

export function GetDiscussListAPI() {
    // return httpRequest( {url: '/GetDiscussList'} )
    let array = [];
    // for (let i = 0; i < 9; i++) {
    //     array.push({ DiscussId: '帖子ID', DiscussTitle: '帖子题目', DiscussTime: '发帖时间', DiscussBy: '发帖人', DiscussByType: '消费者' })
    // }
    array.push({ DiscussId: '帖子ID', DiscussTitle: '测试帖', DiscussTime: '2024-12-04', DiscussBy: '小哈', DiscussByType: '消费者' })
    array.push({ DiscussId: '帖子ID', DiscussTitle: '有没有什么推荐的相机？', DiscussTime: '2024-12-04', DiscussBy: 'momo', DiscussByType: '消费者' })
    array.push({ DiscussId: '帖子ID', DiscussTitle: '避雷某店', DiscussTime: '2024-12-07', DiscussBy: 'NYX', DiscussByType: '消费者' })
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
        array.push({ DiscussId: '搜到的帖子ID', DiscussTitle: '搜到的帖子题目', DiscussTime: '发帖时间', DiscussBy: '发帖人', DiscussByType: '消费者' })
    }
    // Time类均为xxxx-xx-xx格式
    return { result: array }
}

export function GetDiscussAPI(id) {
    // return httpRequest({ url: '/GetDiscuss', params: { id } })
    return { result: { DiscussTime: '2024-12-03', DiscussByType: '消费者', DiscussByName: 'momo', DiscussContent: '最近在商家APEX4869购买的羽绒服质量很一般。收到货后，发现羽绒服的填充物分布不均，某些区域明显薄弱，保暖性差。穿了几次后，外层面料出现了褪色和起球现象，显得非常廉价。最严重的是，缝合处有开线情况，羽绒开始外露，严重影响穿着效果。整体做工粗糙，完全没有预期的质量水平。考虑到价格和质量不符，我对这次购物体验非常不满，强烈建议大家在购买前谨慎考虑。', DiscussById: '12345678' } }
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
    // for (let i = 0; i < 9; i++) {
    //     array.push({ postId: '1000000', postById: '12345678', postTime: '2024-10-01', postByName: '我也是momo', postByType: '消费者', postContent: '我也是，买的什么玩意' });
    // }
    array.push({ postId: '1000000', postById: '12345678', postTime: '2024-10-01', postByName: '我是momo', postByType: '消费者', postContent: '我觉得还好吧' });
    array.push({ postId: '1000000', postById: '12345678', postTime: '2024-10-01', postByName: '我也是momo', postByType: '消费者', postContent: '我也遇到了类似的问题' });
    array.push({ postId: '1000000', postById: '12345678', postTime: '2024-10-01', postByName: 'tiktok', postByType: '消费者', postContent: '我觉得性价比挺高的，没有出现你说的情况我觉得性价比挺高的，没有出现你说的情况我觉得性价比挺高的呀呀呀呀，没有出现你说的情况我觉得性价比挺高的，没有出现你说的情况我觉得性价比挺高的，没有出现你说的情况我觉得性价比挺高的，没有出现你说的情况我觉得性价比挺高的，没有出现你说的情况我觉得性价比挺高的，没有出现你说的情况' });

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