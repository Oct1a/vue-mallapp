<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <a :href="item.sp_home_id">
          <img :src="item.sp_home_ico" alt="">
          <div>{{item.sp_home_title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommends',
  props: {
    recommends: {
      type: Array,
      default: []
    },
  },
}
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
    background: #fff;
  }
  .recommend-item{
      margin: 10px;
    /* flex: 1; */
    }
  .recommend-item img{
    width: 50px;
    margin-bottom: 10px;
  }
</style>