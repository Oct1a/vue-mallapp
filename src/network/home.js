import { request } from './request';
export function getHomeMultidata() {
  return request({
    url: '/api/Home/getHomeREC'
  })
}