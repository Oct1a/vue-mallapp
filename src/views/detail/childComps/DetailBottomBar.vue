<template>
  <div class="bottomBar">
      <div class="bar-item">
          <div class="icon" style="background-image: url(assets/img/detail/cart.png);"></div>
          <span>店铺</span>
      </div>
      <div class="bar-item">
          <div class="icon"></div>
          <span>客服</span>
      </div>
      <div class="bar-item">
          <div class="icon"></div>
          <span>收藏</span>
      </div>
      <div class="bar-item">
         <button>加入购物车</button>
       <button>立即购买</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottomBar{
  background: #fff;
  display: flex;
  z-index: 999;
  position: absolute;
  bottom: 0;
  width: 100%;
  }
  .bar-item .icon{
    height: 50px;
    width: 20px;

    background-position: 0 20px;
  }
  .bar-item{
    flex: 1;
  }
</style>