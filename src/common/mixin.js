import BackTop from 'components/common/backTop/BackTop'; //返回顶部

export const showBackTop = {
  data() {
    return {
      isShowTopBack: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShowBackTop(postion) {
      // 滚动判断是否显示返回按钮
      this.isShowTopBack = -postion.y > 1000
    }
  },
  components: {
    BackTop
  }
}


// module.exports