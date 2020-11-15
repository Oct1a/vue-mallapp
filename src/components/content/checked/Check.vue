<template>
    <div class="CheckButton" :class="{uncheck:!isActive}" :style="{height:style,width:style}">
      <img :src="isActive?checkedImg:''">
    </div>
</template>

<script>
export default {
  name:'Check',
  data(){
    return{
      checkedImg:require('../../../assets/img/cart/Check.svg'),
      nocheckImag:''
    }
  },
  props: {
    isActive:{
      type:Boolean,
      default:false
    },
    size:{
      type:Number,
      default:20
    }
  },
  computed: {
    style(){
        return this.size+'px'
    }
  }
}
</script>

<style scoped>
  .CheckButton{
    position: relative;
    width:20px;
    height: 20px;
    border-radius: 50%;
  }
  .CheckButton>img{
    width: 100%;
  }
  .uncheck{
    border: 2px solid #ccc;
  }
</style>