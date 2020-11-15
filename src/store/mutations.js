import { ADD_COUNTER, ADD_TO_CART, MODIFY_STATE } from '@/store/mutations-types.js' //引用常量

export default {
  [ADD_COUNTER](state, playload) {
    playload.count++;
  },
  [ADD_TO_CART](state, playload) {
    playload.checked = true;
    state.cartList.push(playload)
  }
}