<template>
<div class="bottom-bar">
    <div class="bar-item bar-left">
      <div @click="toService">
        <img src="~assets/img/detail/shop.png" class="icon service" />
        <span class="text">店铺</span>
      </div>
      <div @click="pushCart">
        <img src="~assets/img/detail/kf.png" class="icon shop" />
          <span class="text">客服</span>
      </div>
      <div @click="addEnshrine">
        <img src="~assets/img/detail/fav_2.png" class="icon select" />
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy" @click="buyClick">立即购买</div>
    </div>
  </div>
</template>

<script>

export default {
  name:'DetailBottomBar',
  methods: {
    addCart(){ //添加购物车
      this.$emit("addCart")
    },
    buyClick(){ //立即购买
      this.$emit("buyClick")
    },
    addEnshrine(){ //添加收藏
      this.$emit("addEnshrine")
      this.$toast.show('添加收藏成功') //这边具体逻辑事件还没处理
    },
    toService(){ //点击店铺
      this.$emit("toService")
      this.$toast.show('进入店铺成功！') //这边具体逻辑事件还没处理
    },
    pushCart(){ //跳转到购物车
      this.$router.replace('/cart')
    }
  },
}
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    z-index: 10;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    display: flex;
    text-align: center;
    background-color: white;
    z-index: 10;
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item>div{
    flex: 1;
  }
  .bar-left .tex{
    font-size: 13px;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 3px;
  }
  .bar-right{
    font-size: 15px;
    color: white;
    line-height: 49px;
    font-weight: bold;
  }
  .bar-right .cart{
    background-color: #ffe6e8;
    color: var(--color-high-text);
  }
  .bar-right .buy{
    background-color: #ff5579;
  }
</style>