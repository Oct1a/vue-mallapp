<template>
  <div>
      <tab-bar>
          <tab-bar-item :link="'/home'">
             <img slot="item-icon" src="~assets/img/tabbar/new/diehaomaojin.svg" alt="">
             <img slot="item-icon-active" src="~assets/img/tabbar/new/huazhuang.svg" alt="">
            <div slot="item-text">首页</div>
          </tab-bar-item>
          <tab-bar-item :link="'/category'">
             <img slot="item-icon" src="~assets/img/tabbar/new/penwu.svg" alt="">
             <img slot="item-icon-active" src="~assets/img/tabbar/new/yingyang.svg" alt="">
            <div slot="item-text">分类</div>
          </tab-bar-item>
          <tab-bar-item :link="'/cart'">
             <img slot="item-icon" src="~assets/img/tabbar/new/maojin.svg" alt="">
             <img slot="item-icon-active" src="~assets/img/tabbar/new/meizhuang.svg" alt="">
            <div slot="item-text">购物车</div>
          </tab-bar-item>
          <tab-bar-item :link="'/profile'">
             <img slot="item-icon" src="~assets/img/tabbar/new/jianduantoufa.svg" alt="">
             <img slot="item-icon-active" src="~assets/img/tabbar/new/lazhi.svg" alt="">
            <div slot="item-text">我的</div>
          </tab-bar-item>
      </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabBar/tabBar';
import TabBarItem from 'components/common/tabBar/tabItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>