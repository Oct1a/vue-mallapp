<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>

    <!-- 1.头部导航
        2.轮播图
        3.推荐图
     -->
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue';
  export default {
    components:{
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
