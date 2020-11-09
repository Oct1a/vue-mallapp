<template>
<div class="shopInfo">
  <div class="top-info">
    <img :src="shopInfo.shopLogo" alt="" class="shopLogo">
    <span class="name">{{shopInfo.shopName}}</span>
    <button class="showAllShop" @click="showAll">全部宝贝</button>
    <button class="goinShop" @click="goinShop">进店逛逛</button>
  </div>
  <div class="bottom-info">
    <p>
      宝贝描述 <span>{{shopInfo.shopDescribe | score}}</span>
      买家服务 <span>{{shopInfo.shopDescribe | score}}</span>
      物流服务 <span>{{shopInfo.shopDescribe | score}}</span>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default: []
    },
  },
  methods: {
    showAll() {
      console.log('点击查看全部宝贝')
    },
    goinShop() {
      console.log('点击进入店铺')
    }
  },
  filters: {
    score(value) {
      let v = Number(value);
      return value + ' ' + (v < 2.5 ? '小' : v > 2.5 ? '高' : '中')
    }
  },
}
</script>

<style scoped>
.shopInfo {
  padding: 20px 7px;
}

button {
  margin: 0px 8px;
  padding: 5px 10px;
  border-radius: 20px;
}

button:focus {
  outline: none;
}

.showAllShop {
  color: var(--color-tint);
  border: 1px solid var(--color-tint);
  background: #fff;
}

.goinShop {
  color: #fff;
  border: none;
  background: linear-gradient(-270deg, var(--color-tint), var(--color-high-text));
}

.shopLogo {
  width: 60px;
  vertical-align: middle;
}

.name {
  margin: 0px 10px;
}

.bottom-info {
  margin: 20px 0;
  text-align: center;
  font-size: 14px;
}

.bottom-info p>span {
  color: red;
  margin: 0px 5px;
}
</style>
