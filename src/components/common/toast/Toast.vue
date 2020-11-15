<template>
    <div class="toast" v-show="isShow">
      <div> {{message}} </div>
    </div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
      message:'This is default message!',
      isShow:false
    }
  },
  methods: {
    show(msg,time=3000){ //自动关闭时间默认为3秒
      this.isShow = true;
      this.message = msg;

      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, time);
    }
  }
}
</script>
<style scoped>
  .toast{
    padding:10px 20px;
    background:rgba(0, 0, 0, .6);
    position:absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    z-index: 9999;
    border-radius: 10px;
    color: #fff;
  }
</style>