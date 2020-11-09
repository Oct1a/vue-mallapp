<template>
<div class="line">
    <div :style="style"></div>
</div>
</template>

<script>
export default {
  props: {
    w:{
      type:String,
      default:'100%'
    },
    h: {
      type:Number,
      default: 1
    },
    c:{
      type:String,
      default:'#ccc'
    },
  },
  computed: {
    style() {
      return {
          width: this.w,
          height: this.h + 'px',
          background:this.c
        }
    },
  },
}
</script>

<style>

</style>