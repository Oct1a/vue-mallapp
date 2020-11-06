<template>
  <div class="tabControl">
    <div class="tabControl-item" v-for="(item,index) in title"
    :key="index"
    :class="{tabControlActive: currentIndex == index}"
    @click="tabClick(index)">
      <span>{{item}} </span>
    </div>
  </div>
</template>
<script>
// 1，传入标题
// 2. 更改样式
//
export default {
  name:'TabControl',
  props: {
    title: {
      type: Array
    },
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
}
</script>

<style scoped>
  .tabControl{
    line-height: 40px;
    font-size: 14px;
    display: flex;
    text-align: center;
  }
  .tabControl-item{
    flex:1;
    padding:2px;
  }
  .tabControlActive{
    color:var(--color-high-text);
  }
  .tabControlActive span{
    padding:10px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>