<template>
  <div id="Home">
      <nav-bar class="navbar">
          <div slot="center">蘑菇街</div>
      </nav-bar>
       <tabControl
            :title="['推荐','流行','潮流']"
            @tabClick='tabClick'
            class="tab-Control"
            ref="tabControl_hidden"
            v-show="isTabFixed"
            >
          </tabControl>
      <scroll class="content" ref="scroll"
          :probeType="3"
          :pullUpLoad="true"
          @scrollHeight='contentScroll'
          @pullingUp='getMoreLoad'
          >
          <home-swiper
            :banners="banners"
            @bannerLoad="bannerLoad"></home-swiper>
          <!-- 首页分类展示start -->
          <recommends :recommends="recommends"></recommends>
          <!-- 首页分类展示end -->
          <feature-view/>
          <tabControl
            :title="['推荐','流行','潮流']"
            @tabClick='tabClick'
            :class="{tabControlfixed:isTabFixed}"
            ref="tabControl_show"
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

import {getHomeMultidata,getHomeGoodsList} from 'network/home.js'; //首页数据请求

import {debounce} from 'common/util.js'
import {showBackTop} from 'common/mixin.js'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    Recommends,
    FeatureView,
    TabControl,
    GoodsShow,
    Scroll
  },
  mixins:[showBackTop],
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
      tabOffsetTop:0,
      isTabFixed:false,
      saveY : 0
    }
  },
  created(){
    this.getMultidata();
    this.getGoodsList('new');
    this.getGoodsList('syn');
    this.getGoodsList('sell');
  },
  mounted(){
    //创建完成方法
    const refresh = debounce(this.$refs.scroll.refresh,500)
    // 防抖动
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },
  computed: {
    goodsData() {
      return this.goodsList[this.currentType].data
    },
  },
  destroyed(){
    console.log('home destoryed');
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
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
      this.$refs.tabControl_hidden.currentIndex = index
      this.$refs.tabControl_show.currentIndex = index
    },
    contentScroll(postion){
      this.listenShowBackTop(postion) //显示返回按钮
      this.isTabFixed = -postion.y > this.tabOffsetTop // 判断是否显示吸顶效果
    },
    getMoreLoad(){
      console.log('正在上拉请求更多..');
      this.getGoodsList(this.currentType) //重新请求加载不同数据
    },

    bannerLoad(){
      this.tabOffsetTop = this.$refs.tabControl_show.$el.offsetTop  // 轮播图加载完,获取吸顶组件位置
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
          this.goodsList[type].page +=1

          this.$refs.scroll.finishPullUp()
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
  }
  .tabControlfixed{
    position:fixed;
    left: 0px;
    right: 0px;
    top: 50px;
  }
  .tab-Control{
    position: relative;
    z-index: 9;
  }
  .space{
    height:5px;
    margin: 15px 0px;
    background: #e6e6e6;
  }
   .content{
    overflow: hidden;

    position:absolute;
    top: 50px;
    left: 0px;
    right: 0px;
    bottom: 49px;
  }
  /* .content{
    height: calc(100% - 99px);
    overflow: hidden;
    margin-top: 50px;
  }  */
</style>