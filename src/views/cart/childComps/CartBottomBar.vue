<template>
    <div class="cart-bottom-bar">
      <div class="left">
          <Check @click.native="selectAll" class="checkButton" :isActive="isSelectAll"/>
          <span>全选</span>
      </div>
      <div class="right">
          <span class="price">{{totalPrice}}</span>
          <button class="SetAccounts" @click="settlement">结算({{selectCount}})</button>
      </div>
    </div>
</template>

<script>
import Check from 'components/content/checked/Check'
import { mapGetters } from 'vuex'

export default {
  name:"CartBottomBar",
  components: {
     Check,
  },
  methods: {
    selectAll(){ //全选，将全部商品状态改为选中以及未选中
      if(this.isSelectAll){
        this.list.forEach(element => element.checked = false);
      }else{
        this.list.forEach(element => element.checked = true);
      }
    },
    settlement(){
      if(!this.isSelectAll){
        this.$toast.show('请先选择商品在操作！')
      }else{
        this.$toast.show('暂未开发...')
      }
    }
  },
  computed: {
   //将getters中的 cartLength映射到该处
  // 两种写法
  // ...mapGetters(['getCartLength'])
   ...mapGetters({ //这种可以重命名
     length:'getCartLength',
     list:'getCartList'
   }),
   totalPrice(){ //计算价格总数
      return '￥' + this.$store.state.cartList.filter(item=>{
          return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    selectCount(){ //提取选择商品的数量
      return this.list.filter(item=> item.checked).length
    },
    isSelectAll(){ //判断是否有一个补选中
      if(this.list.length === 0) return false;
      return !this.list.find(item=> !item.checked)
    },
 },
}
</script>

<style scoped>
  .cart-bottom-bar{
    width: 100vw;
    background: #fff;
    border-top: 2px solid #eee;
    height: 50px;
    position: relative;
    bottom: 60px;
  }
  .left{
    float: left;
    height: 50px;
    line-height: 50px;
  }
  .right{
    float: right;
    height: 50px;
    line-height: 50px;
  }
  .price{
    font-size: 18px;
    color: var(--color-high-text);
    font-weight: bold;
  }
  .SetAccounts{
    background: #ff5777;
    color: #fff;
    font-size: 18px;
    padding:5px 20px;
    border-radius: 30px;
    border:none;
    margin:0px 15px;
    line-height: 20px;
  }
  .checkButton{
    display: inline-block;
    vertical-align: middle;
    margin:0px 10px;
  }
</style>