import { request } from './request';
export function getHomeMultidata() {
  return request({
    url: '/api/Home/getHomeREC'
  })
}


export function getHomeGoodsList(page, pageSize, sortType) {
  return request({
    url: '/api/Home/getHomeShowGoods',
    params: {
      page,
      pageSize,
      sortType
    }
  })
}