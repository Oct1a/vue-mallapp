<template>
<div class="detail">
  <detail-navbar @titleClick="titleClick" ref="navbar"/>
  <scroll class="content" ref="scroll" :probeType="3" @scrollHeight='contentScroll'>
    <detail-swiper :topImages="goodsInfo.goodsLogo" />
    <detail-base-info :goodsInfo="goodsInfo" :tips="tips"/>
    <split-line />
    <detail-comment :comment="comment" :goodsBuyNum="goodsInfo.goodsBuyNum" ref="commentInfo" />
    <split-line />
    <detail-shop-info :shopInfo="shopInfo" ref="shopInfo"/>
    <split-line />
    <detail-goods :introduce="goodsInfo.goodsIntroduce" @htmlload="htmlload" ref="goodsShow"/>
  </scroll>
  <back-top @click.native="backClick" v-show='isShowTopBack' /> <!-- 返回顶部 -->
  <detail-bottom-bar @addCart="addCart"/>
  <toast :isShow="true"/>
</div>
</template>

<script>
import DetailNavbar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailComment from './childComps/DetailComment'
import DetailGoods from './childComps/DetailGoods'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import SplitLine from 'components/common/splitLine/Line'
import Scroll from 'components/common/scroll/Scroll'; //滚动组件

import Toast from 'components/common/toast/Toast'; //滚动组件


import {getGoodsDetail} from 'network/detail.js'
import {showBackTop} from 'common/mixin.js'
import {getRandomName} from 'common/util.js'

export default {
  name: 'detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailComment,
    DetailGoods,
    DetailShopInfo,
    SplitLine,
    Scroll,
    DetailBottomBar,
    Toast
  },
  mixins:[showBackTop],
  methods: {
    contentScroll(postion) {
      this.listenShowBackTop(postion) //显示返回按钮
      let postionY = -postion.y;
      // 联动效果
      for(let i=0;i<=this.currentypeYs.length-1;i++ ){
        if(this.currentIndex !=i &&(postionY >= this.currentypeYs[i] && postionY < this.currentypeYs[i+1] )){
            this.currentIndex = i
            this.$refs.navbar.currentIndex = i
        }
      }
    },
    htmlload() {
      // 这里有个问题，因为是v-html渲染，无法监听到图片渲染，则默认监听到渲染组件发过来的事件，在刷新滚动条
      this.$refs.scroll.refresh()
      this.$refs.goodsShow.destory()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.currentypeYs[index],0)
    },
    addCart(){
      // 获取添加到购物车的信息
      const product = {}
      product.id = this.goodsId
      product.images = this.goodsInfo.goodsLogo
      product.name = this.goodsInfo.goodsName
      product.price = this.goodsInfo.goodsPrice
      product.shopName = this.shopInfo.shopName
      // this.$store.state.cartList.push(product)
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(r=>{
        this.$toast.show('添加购物车成功！')
      })
    }
  },
  updated () {
    /**
     * 滚动详情页更新不同的状态
     */
    this.currentypeYs= [];
    this.currentypeYs.push(0);
    this.currentypeYs.push(this.$refs.commentInfo.$el.offsetTop);
    this.currentypeYs.push(this.$refs.shopInfo.$el.offsetTop);
    this.currentypeYs.push(this.$refs.goodsShow.$el.offsetTop);
    this.currentypeYs.push(Number.MAX_VALUE);
  },
  created() {
    // 组件创建后，直接赋值（如果有接口就根据ID请求数据），这里有默认数据则直接赋值了
    this.goodsId = this.$route.params.id
    this.goodsInfo = this.data.data[0];
    this.shopInfo = this.data.data[1];
    this.tips = this.data.data[2];
    this.comment = this.data.data[3];
    //  getGoodsDetail(this.goodsId).then(res=>{ //这边是请求真实数据接口
    //   //  this.goodsInfo = res.data.data[0];
    //   //  this.shopInfo = res.data.data[1];
    //   //  this.tips = res.data.data[2];
    //   //  this.comment = res.data.data[3];
    //   })
  },
  data() {
    return {
      goodsId: {
        type: Number,
        default: 0
      }, //商品ID
      goodsInfo: null, //商品基本信息
      shopInfo: null, //店铺信息
      tips: [], //包含的服务
      comment: [], //评论信息
      currentIndex:0,
      currentypeYs:[0,300,600,900,Number.MAX_VALUE],
      ParentInfo:JSON.parse(this.getLocalValue('GoodsData')), //数据暂时从前面跳转来的数据取
    }
  },
  computed: {
    data(){
       return {  //该数据为模拟数据，有数据接口可直接输出变量
        "code": 200,
        "msg": "获取商品详情页成功",
        "data": [{
            "goodsId": this.ParentInfo.goodsId,
            "goodsName": this.ParentInfo.goodsName,
            "goodsPrice": this.ParentInfo.goodsPrice,
            "goodsFav": this.ParentInfo.goodsFav,
            "goodsOldPrice":  this.ParentInfo.goodsOldPrice,
            "goodsLogo":  this.ParentInfo.goodsLogo,
            "goodsAre":this.ParentInfo.goodsAre,
            "goodsBuyNum": this.ParentInfo.goodsBuyNum,
            "goodsIntroduce": "<div class=\"panel-title\" style=\"text-align:center;\"> <h1>图文详情</h1> </div> <!-- 描述 -->     <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:132.63707571801567%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_3b7754a3ihf5d1kk76cj216j18fdh_766x1016.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:130.28720626631852%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_69afd182ib706idka360k5f6hek9g_766x998.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:130.80939947780678%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_23kkca46984l0ebe2eab8j4di0l63_766x1002.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:151.17493472584854%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_2jh72jebj04g1c81lh45ahjk3jhd8_766x1158.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:142.81984334203653%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_22dd52eklh63l55ib9jdkclke56lh_766x1094.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:141.25326370757182%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_0h2650i0j727lfhf91fg2b64756k9_766x1082.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:147.25848563968668%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_80g7b2la823e1a02iegd2j8g7bi3b_766x1128.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:144.64751958224542%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_45019kg0fl5ccl10fdg96f5260ef1_766x1108.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:149.34725848563968%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_65fc81b63hglj5db3i07gag10d262_766x1144.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:143.08093994778068%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_491hk27k7j3bb2ia1h330f2dg1ejg_766x1096.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:118.53785900783289%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_770c2hb095hcb11lb3efgb1fli14d_766x908.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:133.9425587467363%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_40f0jll0a59i05a7ek2305fjb0i4f_766x1026.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:155.09138381201043%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_5jg691i8g952lk3jl6e2d1l30gab4_766x1188.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:143.60313315926894%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_01j07516de760g48b0f9lc04kg78j_766x1100.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:140.46997389033942%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_6c8il2f7ef1j7a1ed7947ik6ie663_766x1076.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:144.64751958224542%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_191lcll7ja313f7k0b5j6ce8bch1e_766x1108.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:75%;\"> <img class=\"lazy\" style2=\"left: -350px; display: block;\" src=\"https://s11.mogucdn.com/mlcdn/c45406/200506_5b1kf5943g2484flbh1bjdj07847b_800x600.jpg_750x999.jpg\" src=\"https://s11.mogucdn.com/mlcdn/c45406/200506_5b1kf5943g2484flbh1bjdj07847b_800x600.jpg_750x999.jpg\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:25.333333333333336%;\"> <img class=\"lazy\" style2=\"left: -350px; display: block;\" src=\"https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg\" src=\"https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg\"> </div> </div>",
            "isDel": 0,
            "topImages": "https://s5.mogucdn.com/mlcdn/c45406/200506_6ef4dkld7c1k41bbh7c60c8gbhc5g_3999x5999.jpg",
            "num": 2249,
            "isFav": true,
            "hot": 3143,
            "status": 0
          }, {
            "shopId": 2,
            "shopName": getRandomName(4),
            "shopLogo": "https://s5.mogucdn.com/mlcdn/c45406/200419_639j37kal9l6hbae68hei86694akg_402x402.jpg_100x100.jpg",
            "shopAre": "广东省广州市",
            "creteTime": "2020/7/2 16:33:55",
            "shopCpy": "广州市番禺区市桥臻美神服装店",
            "shopPiont": "5.00",
            "shopPriceOk": "5.00",
            "shopQuality": "4.00",
            "shopDescribe": "4.00",
            "sells": 437,
            "snum": 437
          },
          [{
            "icon": "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
            "name": "延误必赔"
          }, {
            "icon": "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
            "name": "退货补运费"
          }, {
            "icon": "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
            "name": "全国包邮"
          }, {
            "icon": "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
            "name": "七天无理由退货"
          }],
          [{
            "comment_img": null,
            "comment_body": {
              "comment_id": "48",
              "product_id": "1553",
              "order_id": "276",
              "user_name": "admin",
              "user_img": "https://www.oct1001.icu:/wwwroot/images/userImg/201017102611005815.jpeg",
              "imgURL": null,
              "content": "q",
              "fwvalue": 2,
              "msvalue": 5,
              "wlvalue": 3,
              "audit_time": "1602857771",
              "modified_time": "1602857771",
              "commnet_sum": 0,
              "is_useful": 0,
              "hot_num": 0,
              "is_good": false,
              "replies_num": 0,
              "additional": null,
              "replies": null
            },
            "comment_sum": 5
          }, {
            "comment_img": null,
            "comment_body": {
              "comment_id": "42",
              "product_id": "1553",
              "order_id": "438",
              "user_name": "admin",
              "user_img": "https://www.oct1001.icu:/wwwroot/images/userImg/201017102611005815.jpeg",
              "imgURL": null,
              "content": "ww",
              "fwvalue": 5,
              "msvalue": 5,
              "wlvalue": 5,
              "audit_time": "1602845017",
              "modified_time": "1602845017",
              "commnet_sum": 0,
              "is_useful": 0,
              "hot_num": 0,
              "is_good": false,
              "replies_num": 0,
              "additional": null,
              "replies": null
            },
            "comment_sum": 5
          }]
        ],
        "returnStatus": 1,
        "tnToken": null
      }
    }
  }
}

</script>

<style scoped>
.detail {
  height: 100vh;
  background: #fff;
}
.content {
  background: #fff;
  height: calc(100% - 50px);
  overflow: hidden;
  position: absolute;
  z-index: 9;
}
</style>
