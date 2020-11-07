<template>
  <div id="app">
    <!-- 防止组件销毁返回会重新加载 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
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
