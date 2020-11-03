<template>
  <div id="Home">
      <nav-bar class="navbar">
          <div slot="center" >蘑菇街</div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommends :recommends="recommends"></recommends>
      <div class="space"></div>
      <feature-view/>
    </div>
</template>

<script>
import NavBar from 'components/common/navBar/navBar'; //导航栏
import {getHomeMultidata} from 'network/home.js'; //首页数据请求

import HomeSwiper from './childComps/HomeSwiper' //首页轮播图组件
import Recommends from './childComps/Recommends' //首页分类组件
import FeatureView from './childComps/FeatureView'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    Recommends,
    FeatureView
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      this.recommends = res.data['data'][0]
      this.banners = res.data['data'][1]
    })
  }
}
</script>

<style>
  .navbar{
    background: var(--color-tint);
    color: white;
  }
  .space{
    height:5px;
    margin: 15px 0px;
    background: #e6e6e6;
  }
</style>