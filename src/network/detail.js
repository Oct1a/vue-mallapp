import { request } from './request';

export function getGoodsDetail(goodsId) {
  return request({
    url: '/api/Goods/GetGoodsInfo',
    // method: 'get',
    // headers: { 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbklEIjoiMSIsIm5iZiI6MTYwNDc1Mjk3MywiZXhwIjoxNjA0NzYzNzczLCJpc3MiOiJPY3RvYmVyIiwiYXVkIjoiU2hvcEFwcF9BUEkifQ.ZUIzVk-u10Q9iAK1TN6l0HUpKvcJ5othg_Xq2Jkzlb8' },
    params: {
      goodsId
    }
  })
}


//将服务器返回的杂乱数据整合; 抽离数据
//基本信息数据
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

//店铺信息数据

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}