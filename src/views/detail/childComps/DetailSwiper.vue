<template>
    <swiper>
      <!-- <div>{{banners.topImages}}</div> -->
        <swiper-item v-for="(item,index) in Array(banners.topImages)" :key="index">
            <a :href="item.topImages">
              <img :src="item.topImages" @load="imageLoad">
            </a>
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper'
export default {
  name:'HomeSwiper',
  data() {
    return {
      isShow: false
    }
  },
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
  methods: {
    imageLoad() {
      if(!this.isShow){
        this.$emit('bannerLoad')
        this.isShow = true
      }

    },
  },

}
</script>

<style scoped>

</style>