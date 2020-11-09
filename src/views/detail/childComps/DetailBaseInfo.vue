<template>
  <div class="detail_baseInfo">
      <div class="info-title">
        <h4>{{goodsInfo.goodsName}}</h4>
      </div>
      <div class="info-price">
        <span class="pice">￥78.76</span>
        <span>{{goodsInfo.goodsOldPrice}}</span>
      </div>
      <div class="info-other">
          <span>销量 {{goodsInfo.num}}</span>
          <span>收藏 {{goodsInfo.goodsFav}}</span>
          <span>{{goodsInfo.goodsAre}}</span>
      </div>
      <div class="line"></div>
      <div class="info-service">
          <div class="service-item" v-for="(item,index) in tips" :key="index">
            <img :src="item.icon" alt="">
            {{item.name}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props: {
    goodsInfo: null,
    tips:{
      type:Array,
      default:[]
    }
  },
}
</script>

<style scoped>
  .detail_baseInfo{
    padding: 0px 10px;
  }
  .detail_baseInfo .info-title{
    margin-top: 20px;
  }
  .detail_baseInfo .info-price{
    margin: 10px 0px 15px 0px;
  }
  .detail_baseInfo .info-price span:nth-child(1){
    color: var(--color-high-text);
    font-size: 25px;
  }
  .detail_baseInfo .info-price span:not(:first-child){
    /* color: var(--color-text); */
    color: #ccc;
    margin-left: 10px;
    text-decoration:line-through;
  }
    .info-other{
    display: flex;
    margin: 10px 0px;
    font-size: 13px;
  }
  .info-other span:nth-child(2){
    color: var(--color-text);
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
  .info-service{
    margin:15px 0px;
    display:flex;
    font-size: 13px;
  }
  .info-service .service-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
    filter: drop-shadow(40px 0px red);
    transform: translate(-40px, 0);
  }
  .info-service .service-item{
    margin:0px 8px;
    overflow: hidden;
    /* flex: 1; */
  }
</style>