<template>
<div class="goods-detail" v-html="introduce">
</div>
</template>

<script>
export default {
  name: 'DetailGoods',
  data() {
    return {
      mhtmlOnload:null
    }
  },
  props: {
    introduce: '',
  },
  methods: {
  },
  mounted() {
      this.mhtmlOnload = setInterval(() => {
        // this.$nextTick(function () {
            this.$emit('htmlload')
          // })
      }, 2000);

  },
  methods: {
    destory(){
      clearInterval(this.mhtmlOnload)
    }
  },
  activated() {
      console.log('activated执行了');
    },
  updated () {
    console.log('-----------')
  },
  beforeUpdate(){
    console.log('-----------')

  }
}
</script>

<style scoped>
.goods-detail {
  width: 100%;
  margin-bottom: 20px;
}

.goods-detail>>>.graphic-pic img {
  width: 100vw;
}
</style>
