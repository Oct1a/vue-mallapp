<template>
  <div class="detail">
    <navbar></navbar>
    <div class="detail_swiper">
        <img :src="goodsInfo && goodsInfo.topImages">
    </div>
    <div class="detail_baseInfo">
        <div class="info-title">
          <h4>小白鞋鞋子女2020潮鞋冬季新款百搭款加绒老爹冬款秋冬休闲鞋</h4>
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
    <div class="buyer-comment">
        <div class="box-title">
            买家评价 {{comment.length}} | 销量 {{goodsInfo.goodsBuyNum}}
          <a href="" class="comment-more">></a>
        </div>
        <div class="comment-tag">
          <div class="tag-item" v-for="(item,index) in commentTag" :key="index">
              <span>{{item.tag}}({{item.num}})</span>
          </div>
        </div>
        <div class="buyer-item" v-for="(item,index) in comment" :key="index">
            <div class="buyer-info">
              <img :src="item.comment_body.user_img" alt="">
              <span>{{item.comment_body.user_name}}</span>
            </div>
            <div class="comment">
                <p>物流很快{{item.comment_body.content}}</p>
            </div>
            <div class="date">
                <span>{{getCommentDate(item.comment_body.modified_time)}}</span>
                <span>颜色:默认</span>
                <span>尺码:默认</span>
            </div>
        </div>
    </div>
    <div class="goods-detail"  v-html="goodsInfo.goodsIntroduce">
    </div>
  </div>
</template>

<script>
import navbar from './childComps/DetailNavBar'
// import swiper from './childComps/DetailSwiper'
import {dateFormat} from 'common/util.js'

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
      comment:[],
      commentTag:[
          {tag:'有图片',num:214},
          {tag:'发货快',num:129},
          {tag:'颜色正',num:126},
          {tag:'鞋型好',num:124},
          {tag:'不磨脚',num:123},
          {tag:'图片描述一致',num:122}
        ],
      data:{"code":200,"msg":"获取商品详情页成功","data":[{"goodsId":1553,"goodsName":"单\\套装连衣裙女2020夏季新款韩版牛仔短裙子时尚两件套","goodsPrice":78.76,"goodsFav":89,"goodsOldPrice":"¥112.52~¥175.38","goodsLogo":"https://s5.mogucdn.com/mlcdn/c45406/200506_6ef4dkld7c1k41bbh7c60c8gbhc5g_3999x5999.jpg","goodsAre":"广东省广州市","goodsBuyNum":2290,"goodsIntroduce":"<div class=\"panel-title\"> <h1>图文详情</h1> </div> <!-- 描述 -->     <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:132.63707571801567%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_3b7754a3ihf5d1kk76cj216j18fdh_766x1016.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:130.28720626631852%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_69afd182ib706idka360k5f6hek9g_766x998.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:130.80939947780678%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_23kkca46984l0ebe2eab8j4di0l63_766x1002.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:151.17493472584854%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_2jh72jebj04g1c81lh45ahjk3jhd8_766x1158.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:142.81984334203653%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_22dd52eklh63l55ib9jdkclke56lh_766x1094.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:141.25326370757182%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_0h2650i0j727lfhf91fg2b64756k9_766x1082.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:147.25848563968668%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_80g7b2la823e1a02iegd2j8g7bi3b_766x1128.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:144.64751958224542%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_45019kg0fl5ccl10fdg96f5260ef1_766x1108.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:149.34725848563968%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_65fc81b63hglj5db3i07gag10d262_766x1144.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:143.08093994778068%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_491hk27k7j3bb2ia1h330f2dg1ejg_766x1096.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:118.53785900783289%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_770c2hb095hcb11lb3efgb1fli14d_766x908.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:133.9425587467363%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_40f0jll0a59i05a7ek2305fjb0i4f_766x1026.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:155.09138381201043%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_5jg691i8g952lk3jl6e2d1l30gab4_766x1188.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:143.60313315926894%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_01j07516de760g48b0f9lc04kg78j_766x1100.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:140.46997389033942%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s11.mogucdn.com/mlcdn/55cf19/200506_6c8il2f7ef1j7a1ed7947ik6ie663_766x1076.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:144.64751958224542%;\"> <img class=\"lazy\" style2=\"left:-350px;\" src=\"https://s5.mogucdn.com/mlcdn/55cf19/200506_191lcll7ja313f7k0b5j6ce8bch1e_766x1108.jpg_750x999.jpg\" src=\"https://s10.mogucdn.com/p2/170306/117603130_3d8589jcfd14l0985l9bkgbhh1h59_100x100.gif\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:75%;\"> <img class=\"lazy\" style2=\"left: -350px; display: block;\" src=\"https://s11.mogucdn.com/mlcdn/c45406/200506_5b1kf5943g2484flbh1bjdj07847b_800x600.jpg_750x999.jpg\" src=\"https://s11.mogucdn.com/mlcdn/c45406/200506_5b1kf5943g2484flbh1bjdj07847b_800x600.jpg_750x999.jpg\"> </div> </div>    <div class=\"graphic-pic\"> <div class=\"pic-box\" style2=\"padding-bottom:25.333333333333336%;\"> <img class=\"lazy\" style2=\"left: -350px; display: block;\" src=\"https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg\" src=\"https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg\"> </div> </div>","isDel":0,"topImages":"https://s5.mogucdn.com/mlcdn/c45406/200506_6ef4dkld7c1k41bbh7c60c8gbhc5g_3999x5999.jpg","num":2249,"isFav":true,"hot":3143,"status":0},{"shopId":2,"shopName":"衣依美舍女装","shopLogo":"https://s5.mogucdn.com/mlcdn/c45406/200419_639j37kal9l6hbae68hei86694akg_402x402.jpg_100x100.jpg","shopAre":"广东省广州市","creteTime":"2020/7/2 16:33:55","shopCpy":"广州市番禺区市桥臻美神服装店","shopPiont":"5.00","shopPriceOk":"5.00","shopQuality":"4.00","shopDescribe":"4.00","sells":437,"snum":437},[{"icon":"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png","name":"延误必赔"},{"icon":"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png","name":"退货补运费"},{"icon":"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png","name":"全国包邮"},{"icon":"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png","name":"七天无理由退货"}],[{"comment_img":null,"comment_body":{"comment_id":"48","product_id":"1553","order_id":"276","user_name":"admin","user_img":"https://www.oct1001.icu:/wwwroot/images/userImg/201017102611005815.jpeg","imgURL":null,"content":"q","fwvalue":2,"msvalue":5,"wlvalue":3,"audit_time":"1602857771","modified_time":"1602857771","commnet_sum":0,"is_useful":0,"hot_num":0,"is_good":false,"replies_num":0,"additional":null,"replies":null},"comment_sum":5},{"comment_img":null,"comment_body":{"comment_id":"42","product_id":"1553","order_id":"438","user_name":"admin","user_img":"https://www.oct1001.icu:/wwwroot/images/userImg/201017102611005815.jpeg","imgURL":null,"content":"ww","fwvalue":5,"msvalue":5,"wlvalue":5,"audit_time":"1602845017","modified_time":"1602845017","commnet_sum":0,"is_useful":0,"hot_num":0,"is_good":false,"replies_num":0,"additional":null,"replies":null},"comment_sum":5}]],"returnStatus":1,"tnToken":null}
    }
  },
  created(){
    this.goodsId = this.$route.params.id
        this.goodsInfo = this.data.data[0];
       this.shopInfo = this.data.data[1];
       this.tips = this.data.data[2];
       this.comment = this.data.data[3];
    //  getGoodsDetail(this.goodsId).then(res=>{
    //    console.log(res);
    //   //  this.goodsInfo = res.data.data[0];
    //   //  this.shopInfo = res.data.data[1];
    //   //  this.tips = res.data.data[2];
    //   //  this.comment = res.data.data[3];

    //   })
  },
  methods: {

    // getDetail(id) {
    //     getGoodsDetail(id).then(res=>{
    //       console.log(res)
    //     })
    // },
  },
  computed: {
    getCommentDate() {
      return function(timemap){
        return dateFormat(timemap*1000,'YYYY-MM-DD')
      }
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
  .goods-detail{
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
  }
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

  .line{
    height: .1px;
    width: 100%;
    background: #ccc;
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
  .goods-detail >>> .graphic-pic img{
    width: 100vw;
  }
  /* 买家评论 */
  .buyer-comment{
    padding: 10px;
  }
  .buyer-comment .box-title{
     color: rgba(0,0,0,0.5);
    font-size: 14px;
  }
  .comment-more{
    float:right;
    font-size:14px;
    font-weight: bold;
    color: #ccc;
    margin-right: 10px;
  }
  .comment-tag{
    margin-top:10px;
    font-size: 14px;
  }
  .tag-item{
    display: inline-block;
    padding: 7px;
    margin: 4px;
    background: #ffe8ee;
    color: var(--color-high-text);
  }
  .buyer-item{
    padding-top: 20px;
    /* border-top: 1px solid #ccc; */
  }
  .buyer-item .buyer-info img{
    width: 40px;
    height:40px;
    border-radius: 50%;
    vertical-align: middle;
  }
    .buyer-item .buyer-info span{
      font-size: 16px;
      margin-left: 10px;
    }
    .comment{
      margin:15px 0px 15px 0;
    }
    .date{
      font-size: 14px;
    }
    .date span:not(:first-child){
      margin:0px 9px;
    }
</style>