<template>
    <div class="wrapper" ref="scrollWrapper">
      <div class="content">
          <slot></slot>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name:'Scroll',
  data() {
    return {
      scroll:null,
    }
  },
  props: {
    probeType: {
      type:Number,
      default:0
    },
  },
  methods: {
    refresh() {
      if(this.scroll) this.scroll.refresh();
    },
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    }
  },
  mounted(){
    this.scroll = new Bscroll(this.$refs.scrollWrapper,{
      probeType:this.probeType,
      pullUpLoad: true,
      click: true
    })
    this.scroll.on('scroll',(postion)=>{
      this.$emit('scrollHeight',postion)
    })
    this.scroll.on('pullingUp',e=>{
      // console.log(e);

    })
  }
}
</script>

<style scoped>

</style>