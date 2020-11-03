import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
  import ('views/home/Home.vue')

const Cart = () =>
  import ('views/cart/Cart.vue')

const Category = () =>
  import ('views/category/Category.vue')

const Profile = () =>
  import ('views/profile/Profile.vue')

Vue.use(Router)

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  name: '首页',
  component: Home
}, {
  path: '/cart',
  name: '购物车',
  component: Cart
}, {
  path: '/category',
  name: '分类',
  component: Category
}, {
  path: '/profile',
  name: '我的',
  component: Profile
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router