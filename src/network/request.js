// 封装请求实例
import axios from 'axios'
export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://www.hj0819.top:44369',
    timeout: 5000
  })

  // 设置axios拦截器
  // instance1.interceptors.request.use(config => { //config可自定义命名
  //     // console.log(config)
  //     return config
  //   }, err => {
  //     console.log(err)
  //   })
  // 相应拦截
  instance1.interceptors.response.use(res => { //res可自定义命名
    return res
  }, err => {
    console.log('拦截器错误：', err)
  })

  return instance1(config) //axios自带promise，所以这边直接返回即可
}