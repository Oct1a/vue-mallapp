<template>
  <div class="counter">
      <span class="subtract" @click="subtract">-</span>
      <input type="text" :value="count">
      <span class="add" @click="add">+</span>
  </div>
</template>

<script>
export default {
  name:'Counter',
  data(){
    return{
    }
  },
  props: {
    count:{
      type:Number,
      default:1
    }
  },
  methods: {
    subtract(){
      if(this.count-1 == 0) return
      this.$emit('subCount')
    },
    add(){
      this.$emit('addCount')
    },
  }
}
</script>

<style scoped>
  span{
     font-size: 16px;
      font-weight: bold;
       margin: 0px 10px;
  }
  .counter{
    background: #eee;
    border-radius: 20px;
    width: 80px;
  }
  .counter input{
    font-weight: bold;
    text-align: center;
    border: none;
    background: none;
    width: 20px;
    font-size: 13px;
  }
  .counter input:focus{
    outline:none;
  }
  .subtract{
    float: left;
  }
  .add{
    float: right;
  }
</style>