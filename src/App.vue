<template>
  <div id="app">
    <!-- 防止组件销毁返回会重新加载 -->
    <keep-alive exclude="detail">
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
  #app{
    background: #efefef;

    touch-action: none;   /* 解决FaskClick在电脑浏览器迪点击出现的错误*/
  }

</style>
