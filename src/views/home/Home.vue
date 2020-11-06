<template>
  <div id="Home">
      <nav-bar class="navbar">
          <div slot="center" >蘑菇街</div>
      </nav-bar>
      <scroll class="content" ref="scroll" :probeType="3" @scrollHeight='contentScroll'>
          <home-swiper :banners="banners"></home-swiper>
          <!-- 首页分类展示start -->
          <recommends :recommends="recommends"></recommends>
          <!-- 首页分类展示end -->
          <div class="space"></div>
          <feature-view/>
          <tabControl
            :title="['推荐','流行','潮流']"
            @tabClick='tabClick'
            class="tab-control"
            >
          </tabControl>
          <!-- 商品展示start -->
          <goods-show
              :goodsData="goodsData">
          </goods-show>
          <!-- 商品展示end -->
      </scroll>
      <back-top @click.native="backClick" v-show='isShowTopBack' />   <!-- 返回顶部 -->

    </div>
</template>

<script>
import NavBar from 'components/common/navBar/navBar'; //导航栏

import HomeSwiper from './childComps/HomeSwiper' //首页轮播图组件
import Recommends from './childComps/Recommends' //首页分类组件
import FeatureView from './childComps/FeatureView' //本周流行（暂为图片填充）
import TabControl from 'components/content/tabControl/TabControl'; //切换商品展示类型
import GoodsShow from 'components/content/goodsShow/GoodsList'; //商品显示
import Scroll from 'components/common/scroll/Scroll'; //滚动组件
import BackTop from 'components/common/backTop/BackTop'; //返回顶部

import {getHomeMultidata,getHomeGoodsList} from 'network/home.js'; //首页数据请求

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    Recommends,
    FeatureView,
    TabControl,
    GoodsShow,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goodsList:{
        "new":{page:0,length:6,data:[]},
        "syn":{page:0,length:10,data:[]},
        "sell":{page:0,length:20,data:[]},
      },
      currentType:'new',
      isShowTopBack:false
    }
  },
  created(){
    this.getMultidata();
    this.getGoodsList('new');
    this.getGoodsList('syn');
    this.getGoodsList('sell');

    this.$bus.$on('itemImageLoad',()=>{
        // this.refresh() //重新刷新高度
        this.$refs.scroll.refresh()
    })

  },
  mounted(){
    //创建完成方法
},
  computed: {
    goodsData() {
      return this.goodsList[this.currentType].data
    },
  },
  methods: {
    /**
     * 事件监听事件
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'new'
          break
        case 1:
          this.currentType = 'syn'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(postion){
      // this.$on()
      this.isShowTopBack = -postion.y >1000
    },
    /**
     * 网络请求
     */
    getMultidata() {
        getHomeMultidata().then(res=>{
          this.recommends = res.data['data'][0]
          this.banners = res.data['data'][1]
        })
    },
    getGoodsList(type){
        const page = this.goodsList[type].page + 1;
        const size = this.goodsList[type].length;
        getHomeGoodsList(page,size,type).then(res=>{
          this.goodsList[type].data.push(...res.data.data)
        })
    }
  },
}
</script>

<style scoped>
  #Home{
    height: 100vh;
  }
  .navbar{
    background: var(--color-tint);
    color: white;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .tab-control{
    position: sticky;
    top:50px;
    z-index: 10;
  }
  .space{
    height:5px;
    margin: 15px 0px;
    background: #e6e6e6;
  }
  .content{
    height: calc(100% - 99px);
    overflow: hidden;
    margin-top: 50px;
    /* overflow-y: scroll; */
  }
</style>