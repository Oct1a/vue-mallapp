<template>
    <div class="goodsList">
      <div class="goodsItem" v-for="(item,index) in goods" :key="index">
        <goods-show>
            <div slot="goods-item">
              <!-- <div class="pin-img"> -->
                <img :src="item.goodsLogo" alt="" class="goods-img" @load="imageload">
                <p class="buyNum">已售 {{item.goodsBuyNum}} 件</p>
              <!-- </div> -->
              <div class="detail">
                <h4 class="title">{{item.goodsName}}</h4>
                <div class="detail-price-fav">
                  <span class="price">￥{{item.goodsPrice}}</span>
                  <span class="fav">{{item.goodsFav}}人已收藏</span>
                </div>
                <button class="buyNowBtn">立即购买</button>
              </div>
            </div>
        </goods-show>
      </div>
    </div>

</template>

<script>

import GoodsShow from './GoodsShow'
export default {
    name:'GoodsList',
    props: {
      goodsData: {
        type:Array,
        default: []
      },
    },
    methods: {
      imageload() {
        this.$bus.$emit('itemImageLoad')
          console.log(1111)
      },
    },
    computed: {
      goods() { //去掉图片链接后100x100.jpg为大图
        let reg = /(\.jpeg|\.png|\.jpg)/g;
        return this.goodsData.map(r=>{
          reg.test(r.goodsLogo);
          r.goodsLogo = r.goodsLogo.slice(0,reg.lastIndex);
          reg.lastIndex = 0;
          return r
        })
      },
    },
    components:{
      GoodsShow
    }
}
</script>

<style scoped>
  .goodsList{
    padding:10px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  .goodsItem{
    width: 50%;
     position: relative;
     padding: 10px;
     background:#fff
  }
  .title{
    font-size: 14px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }
  .pin-img{
    height: 4.64rem;
  }
  .goods-img{
    width: 100%;
    border-radius: 5px;
  }
  .detail{
      margin:10px 0px;
  }
  .detail-price-fav{
     display: flex;
    /* 元素垂直居中 */
    align-items: center;
    /* 元素平均分配 */
    justify-content: space-between;
    margin:10px 0px;
  }
  .price{
    font-weight: bold;
  }
  .fav{
    font-size: 12px;
  }
  .buyNum{
    position: absolute;
    top: 50%;
    right: 10px;
    font-size: 12px;
    color: #fff;
    background:rgba(0, 0,0,.5);
    padding: 5px;
  }
  .buyNowBtn{
    border: none;
    border-radius: 5px;
    color: #fff;
    width: 100%;
    line-height: 30px;
    background: var(--color-high-text);
  }
</style>