<template>
<div class="navbar">
  <nav-bar>
    <div slot="left">
      <img src="~assets/img/common/back.svg" alt="" class="detail_back" @click="backBtn">
    </div>
    <div slot="center" class="nav-title">
      <div v-for="(item,index) in titles" class="nav-item" :key="item" :class="{actived:index === currentIndex}" @click="clickItem(index)">{{item}}</div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navBar/navBar'; //导航栏

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品','评论' ,'店铺','详情'],
      currentIndex: 0
    }
  },
  methods: {
    backBtn() {
      this.$router.back()
    },
    clickItem(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.navbar {
  background: #fff;
}

.detail_back {
  margin-top: 15px;
}

.nav-title {
  display: flex;
  padding: 0px 60px;
  font-size: 14px;
}

.nav-item {
  flex: 1;
  height: 40px;
}

.actived {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
