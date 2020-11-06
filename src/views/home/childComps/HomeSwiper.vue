<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.slide_show_imgUrl">
              <img :src="item.slide_show_imgUrl">
            </a>
        </swiper-item>

      </swiper>
</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper'
export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    },
  },
}
</script>

<style scoped>

</style>