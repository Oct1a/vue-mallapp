<template>
<div class="goods-detail" v-html="introduce">
</div>
</template>

<script>
export default {
  name: 'DetailGoods',
  props: {
    introduce: '',
  },
}
</script>

<style scoped>
.goods-detail {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}

.goods-detail>>>.graphic-pic img {
  width: 100vw;
}
</style>
