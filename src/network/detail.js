import { request } from './request';

export function getGoodsDetail(goodsId) {
  return request({
    url: '/api/Goods/GetGoodsInfo',
    // method: 'get',
    headers: { 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbklEIjoiMSIsIm5iZiI6MTYwNDc1Mjk3MywiZXhwIjoxNjA0NzYzNzczLCJpc3MiOiJPY3RvYmVyIiwiYXVkIjoiU2hvcEFwcF9BUEkifQ.ZUIzVk-u10Q9iAK1TN6l0HUpKvcJ5othg_Xq2Jkzlb8' },
    params: {
      goodsId
    }
  })
}