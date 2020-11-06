<template>
    <div class="BackTop" >
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
  name:'BackTop',
}
</script>

<style scoped>
  .BackTop{
    border-radius: 50%;
    /* background: #fff; */
    z-index: 9999;
    position: fixed;
    bottom: 60px;
    right: 10px;
  }
  .BackTop img{
    width:60px;
  }
</style>