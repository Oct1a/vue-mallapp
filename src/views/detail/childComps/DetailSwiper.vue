<template>
  <!--  目前给的数据格式只有一张图片链接，暂无需引用轮播 -->
  <div class="detail_swiper">
        <img :src="topImages">
    </div>
</template>

<script>
export default {
  name:'DetailSwiper',
  props: {
    topImages: {
      type: String,
      default:''
    },
  },
}
</script>

<style scoped>
 .detail_swiper{
    width: 100%;
    height: 35vh;
    overflow: hidden;
  }
  .detail_swiper img{
    width: 100%;
  }
</style>