import httpRequest from "@/utils/http";

export function getBannerAPI() {
    return httpRequest({ url: '/home/banner' })
}

export function getNewAPI() {
    return httpRequest({ url: '/home/new' })
}

export function getHotAPI() {
    return httpRequest({ url: '/home/hot' })
}

export function getGoodsAPI() {
    return httpRequest({ url: 'home/goods' })
}