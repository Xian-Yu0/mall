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
    return httpRequest( {
        url: 'api/GetGoodDetail/',
        params: { id }
    } )
}

export function GetDetailCommentAPI(id) {
    return httpRequest({
        url: 'api/GetDetailComment/',
        params: { id }
    })
}

export function GetDiscussListAPI() {
    return httpRequest( {url: 'api/GetDiscussList/'} )
}

export function SearchDiscussAPI(name) {
    return httpRequest({
        url: 'api/SearchDiscuss/',
        params: { name }
    })
}

export function GetDiscussAPI(id) {
    return httpRequest({ url: 'api/GetDiscuss/', params: { id } })
}

export function DeleteDiscussAPI(id) {
    return httpRequest( {url: 'api/DeleteDiscuss/', params: {id} });
}

export function GetPostListAPI(id) {
    return httpRequest({
        url: 'api/GetPostList/',
        params: { id }
    })
}

export function DeletePostAPI(id) {
    return httpRequest({
        url: 'api/DeletePost/',
        params: { id }
    })
}

export function DeleteCommentAPI(id) {
    return httpRequest({
        url: 'api/DeleteComment/',
        params: { id }
    })
}