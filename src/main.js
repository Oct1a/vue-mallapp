import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() //事件总线

/**
 *  使用并引入自定义toast插件
 */
import toast from 'components/common/toast'
Vue.use(toast)


/**
 * 使用fastclick解决手机端300ms 的延迟问题
 * 因为手机点击按钮是会等待300ms判断是否双击，所以会出现300ms问题
 * https://github.com/ftlabs/fastclick
 */

FastClick.attach(document.body);

/**
 * 使用vue-lazyload懒加载
 * https://github.com/hilongjw/vue-lazyload
 */
Vue.use(VueLazyload, {
  loading: require('./assets/img/holderImage.png')
})

/**
 * 挂载localStorage到Vue
 * 这边是用于临时存储首页的商品数据，避免模拟的数据都一样
 * @param {String} name 存储名称
 * @param {*} value 存储数据
 */

Vue.prototype.setLocalValue = function(name, value) {
  if (window.localStorage) {
    localStorage.setItem(name, value);
  } else {
    alert('This browser does NOT support localStorage');
  }
};
/**
 *  取出本地存储，使用方法：this.$getLocalValue('name')
 * @param {String} name 存储的名称
 */
Vue.prototype.getLocalValue = function(name) {
  const value = localStorage.getItem(name);
  if (value) {
    return value;
  } else {
    return '';
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')