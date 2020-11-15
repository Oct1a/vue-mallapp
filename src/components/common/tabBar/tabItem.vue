<template>
  <div class="tab-bar-item" @click="onClickItem">
    <div v-if="!isActive" >
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'tabItem',
  props: {
    link: {
      type: String
    },
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1
    },
  },
  methods: {
    onClickItem() {
      this.$router.push(this.link).catch(e=>e)
    },
  },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width:30px;
    height: 30px;
    vertical-align: middle;
  }
  .active{
    color:red;
  }
</style>