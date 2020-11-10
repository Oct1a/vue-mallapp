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
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    refresh() {
      if (this.scroll) this.scroll.refresh();
    },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    getScrollY() {
      this.scroll ? this.scroll.y : 0
    },
    getScrollHeight() {
      return this.scroll ? this.scroll.scrollerHeight : 0
    }

  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.scrollWrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
    this.scroll.on('scroll', (postion) => {
      this.$emit('scrollHeight', postion) //发送滚动条位置
    })
    this.scroll.on('pullingUp', e => {
      this.$emit('pullingUp') //上拉事件
    })
  }
}
</script>

<style scoped>

</style>
