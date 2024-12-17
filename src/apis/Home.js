import httpRequest from "@/utils/http";

export function getBannerAPI() {
    // return httpRequest({ url: '/home/banner' })
    let array = [];
    array.push("src/assets/DemoPic/banner2.jpg")
    array.push("src/assets/DemoPic/banner5.jpg")
    array.push("src/assets/DemoPic/banner4.jpg")
    array.push("src/assets/DemoPic/banner3.jpg")
    array.push("src/assets/DemoPic/banner1.jpg")
    return { result: array }
}

export function getNewAPI() {
    return httpRequest({ url: 'api/home/new' })
    // let array = [];
    // for (let i = 0; i < 4; i++) {
    //     array.push({ pic: "src/assets/DemoPic/2.png", name: "商品名字", price: 1223, id: '123456商品id' })
    // }
    // return { result: array }
}

export function getHotAPI() {
    return httpRequest({ url: 'api/home/hot' })
    // let array = [];
    // for (let i = 0; i < 4; i++) {
    //     array.push({ pic: "src/assets/DemoPic/2.png", name: "商品名字", desc: "商品描述", id: '123456商品id' })
    // }
    // return { result: array }
}

export function getGoodsAPI() {
    return httpRequest({ url: 'api/home/goods' })
    // let array = [];
    // for (let i = 0; i < 100; i++) {
    //     array.push({ picture: "src/assets/DemoPic/2.png", name: "商品名字", desc: "商品描述", price: 12222, id: "12222商品id" })
    // }
    // return { result: array }
}