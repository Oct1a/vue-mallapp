import {
  ADD_COUNTER,
  ADD_TO_CART,
  MODIFY_STATE
} from '@/store/mutations-types.js'

export default {
  // 异步操作数据，与dispatch配合使用
  // context 上下文
  addCart(content, playload) {
    return new Promise((resolve, reject) => {
      let oldProduct = content.state.cartList.find(item => item.id === playload.id)
      if (oldProduct) {
        content.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量+1')
      } else {
        playload.count = 1
        content.commit(ADD_TO_CART, playload)
        resolve('添加商品成功')
      }
    })
  }
}