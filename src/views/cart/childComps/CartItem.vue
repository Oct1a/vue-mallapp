<template>
  <div class="CartItem">
      <div class="card">
        <div class="card-head">
          <div class="ic">
            <Check @click.native="checkUp" :isActive="CartData.checked" :size="18"/>
          </div>
          <span class="shopName">{{CartData.shopName}}</span>
        </div>
        <div class="card-content">
            <div class="ic">
              <Check @click.native="checkUp" :isActive="CartData.checked"/>
            </div>
          <div class="proImg">
            <img :src="CartData.images" alt="">
          </div>
          <div class="detail">
              <div class="title">
                {{CartData.name}}
              </div>
              <div class="parm">
                  颜色：咖啡色; 尺码：M（120-140斤）;
              </div>
              <span class="activity">付款后最晚于15日内发货</span>
          </div>
        </div>
        <div class="card-footer">
          <span class="price">￥{{CartData.price}}</span>
          <Counter :count="CartData.count" class="number" @addCount='addCount(CartData.id)' @subCount='subCount(CartData.id)' />
        </div>

      </div>
  </div>
</template>

<script>
import Check from 'components/content/checked/Check' //单选框
import Counter from 'components/content/counter/Counter' //计数器

export default {
  name:'CartItem',
  components: {
    Check,
    Counter
  },
  props: {
    CartData:{
      type:Object
    }
  },
  methods: {
    checkUp(){
      this.CartData.checked = !this.CartData.checked
    },
    addCount(id){
      this.$emit('addBuyCount',id)
    },
    subCount(id){
      this.$emit('subBuyCount',id)
    }
  }
}
</script>

<style scoped>
  .number{
    display: inline-block;
  }
  .shopName{
    font-size: 16px;
  }
  .ic{
    display: inline-block;
    margin-right:10px ;
  }
  .card-content .ic{
    vertical-align: top;
    margin-top: 13%;
  }
  .card{
    overflow: hidden;
    background: #fff;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
  }
  .card-head{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .card-content{
    width: 100%;
    margin:15px 0px;
  }
  .card-content .proImg{
    width: 20%;
    display: inline-block;
  }
  .card-content .proImg img{
    width: 100%;
  }
  .detail{
    width: 68%;
    display: inline-block;
    margin-left: 10px;
    vertical-align: top;
  }
  .detail .title{
    font-size: 0.9rem;
    font-weight: bold;
    margin:5px 0px;
  }
  .parm{
    background: #f7f7f7;
    font-size: 14px;
    padding: 2px 5px;
    line-height: 18px;
    border-radius: 5px;
  }
  .parm::before{
    content: '﹀';
    position:absolute;
    right: 40px;

  }
  .activity{
    font-size: 14px;
    display: inline-block;
    margin: 10px 0px;
    padding: 2px 5px;
    background: #ffe6e8;
    color: var(--color-high-text);
  }
  .card-footer{
      float: right;
  }
  .card-footer .price{
    font-size: 1.1rem;
    font-weight: bold;
    margin-right: 7rem;
    color: var(--color-high-text);
  }
</style>