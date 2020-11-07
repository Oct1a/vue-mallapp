<template>
  <div class="detail">
    <navbar></navbar>
    <div class="detail_swiper">
        <img :src="goodsInfo && goodsInfo.topImages">
    </div>
    <div class="detail_baseInfo">
        <h4>小白鞋鞋子女2020潮鞋冬季新款百搭款加绒老爹冬款秋冬休闲鞋</h4>
        <span>￥78.76</span>
        <span>￥112.76</span>~
        <span>￥178.76</span>

        <span></span>
    </div>
  </div>
</template>

<script>
import navbar from './childComps/DetailNavBar'
// import swiper from './childComps/DetailSwiper'


import {getGoodsDetail} from 'network/detail.js'

export default {
  name:'detail',
  components:{
    navbar
  },
  data() {
    return {
      goodsId:{
        type:Number,
        default:0
      },
      goodsInfo:null,
      shopInfo:null,
      tips:[],
      comment:[]
    }
  },
  created(){
    this.goodsId = this.$route.params.id,
     getGoodsDetail(this.goodsId).then(res=>{
       this.goodsInfo = res.data.data[0];
       this.shopInfo = res.data.data[1];
       this.tips = res.data.data[2];
       this.comment = res.data.data[3];
       console.log(res);

      })
  },
  methods: {

    // getDetail(id) {
    //     getGoodsDetail(id).then(res=>{
    //       console.log(res)
    //     })
    // },
  }
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