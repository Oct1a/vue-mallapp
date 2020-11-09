<template>
<div class="nav-bar">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="center">
    <slot name="center"></slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {

    }
  },
  props: {
    textColor: {
      type: String,
      default: 'while'
    },
    computed: {
      name() {
        // return this.data
      },
    },
  },

}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 50px;
  line-height: 50px;
  text-align: center;
  box-shadow: 0px 5px 10px #ccc;
}

.left,
.right {
  width: 40px;
}

.center {
  flex: 1;
}
</style>
