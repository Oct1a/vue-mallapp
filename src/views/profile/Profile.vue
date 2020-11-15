<template>
  <div id="Profile">
    <!-- 这边只做界面，不做具体功能 -->
    <div class="header">
      <div class="avatar">
        <img src="https://avatars2.githubusercontent.com/u/17723843" alt="">
      </div>
      <h2>Oct1a</h2>
      <img src="https://s10.mogucdn.com/mlcdn/c45406/191010_2il1l3i91gkd5c461j93e5ehfcgi5_1404x216.png" alt="">
    </div>

    <div class="order-box">
      <div class="box-title">
        <h3>我的订单</h3>
      </div>
      <div class="box-content">
        <div class="item" v-for="(item, index) in images" :key="index">
          <div class="icon">
            <img :src="item.src" alt="">
          </div>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>

    <div class="setting-box">
      <div class="box-title">
        <h3>我的设置</h3>
      </div>
      <div class="box-content">
        <div class="item" v-for="(item, index) in images" :key="index">
          <div class="icon">
            <img :src="item.src" alt="">
          </div>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>

    <div class="outloin" @click="outLogin">
        退出登录
    </div>
  </div>
</template>

<script>
export default {
  name:'Profile',
  data(){
    return{
      images:[
        {title:'待付款',src:'https://s10.mogucdn.com/mlcdn/c45406/190815_0ig16599k9l4f80g59cbkc6bcadid_75x75.png'},
        {title:'待发货',src:'https://s10.mogucdn.com/mlcdn/c45406/190815_5j02c44liecec503kdldjbh72hca8_75x75.png'},
        {title:'待收获',src:'https://s10.mogucdn.com/mlcdn/c45406/190815_56bd5eg3f4h47g2l1042436dc2950_75x75.png'},
        {title:'评价',src:'https://s10.mogucdn.com/mlcdn/c45406/190815_8af1b27cfaed15fllab4j3hffh7h8_75x75.png'},
        {title:'退款售后',src:'https://s10.mogucdn.com/mlcdn/c45406/190815_18db4je44bd6ej8ajg0l1950ia5ih_75x75.png'}
      ]
    }
  },
  methods: {
    outLogin(){
      this.$toast.show('退出成功')
    }
  },
  created(){

  }
}
</script>

<style scoped>
  #Profile{
    background: url('https://s10.mogucdn.com/mlcdn/c45406/190819_1j85g48lc84kk8deg00f66fk53dlc_750x229.png') no-repeat;
    height: 100vh;
    background-size:contain;
    padding-top: 70px;
  }
  .header,.order-box,.setting-box{
    background: #fff;
    border-radius: 10px;
    margin:20px;
  }

  .header{
    text-align: center;
    position: relative;
    height: 130px;
  }

  .header h2{
    position: relative;
    top: 40px;
    font-size: 17px;
  }

  .avatar{
    width: 60px;
    position: absolute;
    left: 50%;
    right: 50%;
    margin:-30px -30px;
  }
  .avatar img{
    border-radius: 50%;
    width: 100%;
  }
  .header>img{
    position:absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .box-title{
    padding:20px;
    font-size: 13px;
  }
  .order-box,.setting-box{
    overflow: hidden;
  }
  .box-content{
    display: flex;
    margin:10px;
  }
  .box-content .item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .item .icon>img{
    width: 30px;
  }
  .outloin{
    background: #ff5777;
    border-radius: 10px;
    color: #fff;
    padding:15px 20px;
    text-align: center;
    margin: 20px;
    font-size: 16px;
  }
</style>