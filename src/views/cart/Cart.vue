<template>
  <div id="Cart">
    <nav-bar class="navbar">
        <div slot="center">购物车({{length}})</div>
      </nav-bar>
        <div v-if="length!=0" class="cart-box">
          <scroll class="content" ref="scroll" >
            <div v-for="(item, index) in list" :key="index" class="cart-item">
              <cart-item  :CartData='item' @addBuyCount="addBuyCount"  @subBuyCount="subtractBuyCount"></cart-item>
            </div>
          </scroll>
          <cart-bottom-bar/>
        </div>
      <empty-cart v-else/>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/navBar'; //导航栏
import CartItem from './childComps/CartItem'; //导航栏
import EmptyCart from './childComps/EmptyCart'; //导航栏
import CartBottomBar from './childComps/CartBottomBar'; //结算
import Scroll from 'components/common/scroll/Scroll'
import { mapGetters } from 'vuex'
export default {
  name:'Cart',
  data(){
    return{

    }
  },
  components: {
    NavBar,
    CartItem,
    EmptyCart,
    Scroll,
    CartBottomBar
  },
  mounted () {
     this.$nextTick(() => {
       if(this.$refs.scroll){
         this.$refs.scroll.refresh()
       }
     })
  },
  methods: {
    addBuyCount(id){
      this.list.find(item=>item.id === id).count++
    },
    subtractBuyCount(id){
      this.list.find(item=>item.id === id).count--
    }
  },
  computed: {
   //将getters中的 cartLength映射到该处
  // 两种写法
  // ...mapGetters(['getCartLength'])
   ...mapGetters({ //这种可以重命名
     length:'getCartLength',
     list:'getCartList'
   })
 },
}
</script>

<style scoped>
  #Cart{
    height: 100vh;
  }
  .navbar{
    background: #fff;
  }
  .content{
    margin-top: 10px;
    height: 100%;
  }
  .cart-box{
    height: calc(100% - 49px - 50px);
    overflow: hidden;
  }
  .cart-item:last-child{
    margin-bottom: 50px;
  }
</style>