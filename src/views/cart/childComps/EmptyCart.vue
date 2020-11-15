<template>
    <div class="noData" >
      <img src="~assets/img/cart/noProduct.png" alt="">
      <p class="tips">你的购物车空空如也</p>
      <button @click="goHome">去逛逛</button>
    </div>
</template>

<script>
export default {
  name:'CartItem',
  methods: {
    goHome(){
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
  .noData{
    text-align: center;
    background: #fff;
    height: 100vh;
  }
  .noData img{
    width: 100%;
  }
  .noData .tips{
    margin-bottom: 15px;
  }
  .noData button{
    border: none;
    border-radius: 5px;
    color: #fff;
    background:#ff5777;
    padding:10px 30px;
  }
</style>