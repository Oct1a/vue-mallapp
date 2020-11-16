# 基于Vue仿蘑菇街Wap移动购物商城

| <img src="./img/localhost_8080_home(Moto G4).png" style="zoom: 33%;" /> | <img src="./img/localhost_8080_home(Moto G4) (1).png" alt="localhost_8080_home(Moto G4)" style="zoom:33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="./img/localhost_8080_detail_1796(iPhone%206_7_8).png" style="zoom:33%;" /> | <img src="./img/localhost_8080_home(iPhone%206_7_8%20Plus)%20(1).png" style="zoom: 25%;" /> |
| <img src="./img/localhost_8080_home(Moto%20G4)%20(2).png" style="zoom:33%;" /> | <img src="./img/localhost_8080_home(iPhone%206_7_8%20Plus).png" style="zoom: 30%;" /> |
| <img src="./img/localhost_8080_home(iPhone%205_SE).png" style="zoom:33%;" /> |                                                              |

## 项目介绍

> Vue练手项目，功能未完善，无法用于商业用途
> 店铺名称是用随机中文字符生成

API接口使用的是:[ShopApi](https://october.w.eolinker.com/#/share/project/api/?groupID=1029756&shareCode=ZsQNDF&shareToken=$2y$10$fCvdfupB5uIJrly8fwex7OpSabJsAbc41v10Rys7zCtY2g9355EgG&shareID=256523)
> 将localhost改为http://www.hj0819.top 即可使用

## 项目启动

```
//先安装所需模块
yarn install
//启动服务
yarn serve
//编译
yarn build
```

## 项目文件夹结构介绍
	|-src
		|-assets 资源文件夹
	    |-common 公共的 js 文件
	    |-commponents 下的 common 是复用的组件
	    |-content 是本次项目的业务组件
	    |-network 网络请求
	    |-store vuex状态管理
	    |-view 视图文件

## 组件介绍

### 一. FeatureView

*   独立组件封装FeatureView
    *   div>a>img

### 二. TabControl

*   独立组件的封装
    *   props -> titles
    *   div>根据titles v-for遍历 div -> span{{title}}
    *   css相关
    *   选中哪一个tab, 哪一个tab的文字颜色变色, 下面border-bottom
        *   currentIndex
```
    <template>
      <div class="tab-control">
          <div v-for="(item, index) in titles"
           :key="(item,index)" class="tab-control-item"
           :class="{active: index===currentIndex}"
           @click="itemClick(index)">
              <span>{{item}}</span>
          </div>
      </div>
    </template>

    <script>
    export default {
      name: 'TabControl',
      props:{
          titles:{
              type:Array,
              default(){
                  return [];
              }
          }
      },
      data() {
        return {
            currentIndex:0,
        }
      },
      methods:{
          itemClick(index){
              this.currentIndex = index;
              this.$emit('tabClick', index);
          }
      }
     }
    </script>

    <style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .tab-control-item{
        flex: 1;

    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color: #ff5777;

    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
    </style>

```

### 三. 首页商品数据的请求

#### 3.1. 设计数据结构, 用于保存数据

goods: {

pop: page/list

new: page/list

sell: page/list

}

#### 3.2. 发送数据请求

*   在home.js中封装getHomeGoods(type, page)
*   在Home.vue中, 又在methods中getHomeGoods(type)
*   调用getHomeGoods(‘pop’)/getHomeGoods(‘new’)/getHomeGoods(‘sell’)
    *   page: 动态的获取对应的page
*   获取到数据: res
    *   this.goods\[type\].list.push(…res.data.list)
    *   this.goods\[type\].page += 1

goods: {

pop: page1:/list\[30\]

new: page1/list\[30\]

sell: page1/list\[30\]

}

### 四. 对商品数据进行展示

#### 4.1. 封装GoodsList.vue组件

*   props: goods -> list\[30\]
*   v-for goods -> GoodsListItem\[30\]
*   GoodListItem(组件) -> GoodsItem(数据)

#### 4.2. 封装GoodsListItem.vue组件

*   props: goodsItem
*   goodsItem 取出数据, 并且使用正确的div/span/img基本标签进行展示

### 五. 对滚动进行重构: Better-Scroll

#### 5.1. 在index.html中使用Better-Scroll

*   const bscroll = new BScroll(el, { })
*   注意: wrapper -> content -> 很多内容
*   1.监听滚动
    *   probeType: 0/1/2(手指滚动)/3(只要是滚动)
    *   bscroll .on(‘scroll’, (position) => {})
*   2.上拉加载
    *   pullUpLoad: true
    *   bscroll .on(‘pullingUp’, () => {})
*   3.click: false
    *   button可以监听点击
    *   div不可以

#### 5.2. 在Vue项目中使用Better-Scroll

*   在Profile.vue中简单的演示
*   对Better-Scroll进行封装: Scroll.vue
*   Home.vue和Scroll.vue之间进行通信
    *   Home.vue将probeType设置为3
    *   Scroll.vue需要通过$emit, 实时将事件发送到Home.vue

### 六. 回到顶部BackTop

#### 6.1. 对BackTop.vue组件的封装

#### 6.2. 如何监听组件的点击

*   直接监听back-top的点击, 但是可以直接监听?
    *   不可以, 必须添加修饰.native
*   回到顶部
    *   scroll对象, scroll.scrollTo(x, y, time)
    *   this.$refs.scroll.scrollTo(0, 0, 500)

#### 6.3. BackTop组件的显示和隐藏

*   isShowBackTop: false
*   监听滚动, 拿到滚动的位置:
    *   -position.y > 1000 -> isShowBackTop: true
    *   isShowBackTop = -position.y > 1000

### 七. 解决首页中可滚动区域的问题

*   Better-Scroll在决定有多少区域可以滚动时, 是根据scrollerHeight属性决定

    *   scrollerHeight属性是根据放Better-Scroll的content中的子组件的高度
    *   但是我们的首页中, 刚开始在计算scrollerHeight属性时, 是没有将图片计算在内的
    *   所以, 计算出来的告诉是错误的(1300+)
    *   后来图片加载进来之后有了新的高度, 但是scrollerHeight属性并没有进行更新.
    *   所以滚动出现了问题
*   如何解决这个问题了?

    *   监听每一张图片是否加载完成, 只要有一张图片加载完成了, 执行一次refresh()
    *   如何监听图片加载完成了?
        *   原生的js监听图片: img.onload = function() {}
        *   Vue中监听: @load=‘方法’
    *   调用scroll的refresh()
*   如何将GoodsListItem.vue中的事件传入到Home.vue中

    *   因为涉及到非父子组件的通信, 所以这里我们选择了**事件总线**
        *   bus ->总线
        *   Vue.prototype.$bus = new Vue()
        *   this.bus.emit(‘事件名称’, 参数)
        *   this.bus.on(‘事件名称’, 回调函数(参数))
*   问题一: refresh找不到的问题

    *   第一: 在Scroll.vue中, 调用this.scroll的方法之前, 判断this.scroll对象是否有值
    *   第二: 在mounted生命周期函数中使用 this.$refs.scroll而不是created中
*   问题二: 对于refresh非常频繁的问题, 进行防抖操作

    *   防抖debounce/节流throttle(课下研究一下)
    *   防抖函数起作用的过程:
        *   如果我们直接执行refresh, 那么refresh函数会被执行30次.
        *   可以将refresh函数传入到debounce函数中, 生成一个新的函数.
        *   之后在调用非常频繁的时候, 就使用新生成的函数.
        *   而新生成的函数, 并不会非常频繁的调用, 如果下一次执行来的非常快, 那么会将上一次取消掉

          debounce(func, delay) {
            let timer = null
            return function (...args) {
              if (timer) clearTimeout(timer)
              timer = setTimeout(() => {
                func.apply(this, args)
              }, delay)
            }
          },


### 八. 上拉加载更多的功能

    loadMore(){
         this.getHomeGoods(this.currentType);
         this.$refs.scroll.refresh();
       }


### 九. tabControl的吸顶效果

#### 9.1. 获取到tabControl的offsetTop

*   必须知道滚动到多少时, 开始有吸顶效果, 这个时候就需要获取tabControl的offsetTop
*   但是, 如果直接在mounted中获取tabControl的offsetTop, 那么值是不正确.
*   如何获取正确的值了?
    *   监听HomeSwiper中img的加载完成.
    *   加载完成后, 发出事件, 在Home.vue中, 获取正确的值.
    *   补充:
        *   为了不让HomeSwiper多次发出事件,
        *   可以使用isLoad的变量进行状态的记录.
    *   注意: 这里不进行多次调用和debounce的区别

#### 9.2. 监听滚动, 动态的改变tabControl的样式

*   问题:动态的改变tabControl的样式时, 会出现两个问题:
    *   问题一: 下面的商品内容, 会突然上移
    *   问题二: tabControl虽然设置了fixed, 但是也随着Better-Scroll一起滚出去了.
*   其他方案来解决停留问题.
    *   在最上面, 多复制了一份PlaceHolderTabControl组件对象, 利用它来实现停留效果.
    *   当用户滚动到一定位置时, PlaceHolderTabControl显示出来.
    *   当用户滚动没有达到一定位置时, PlaceHolderTabControl隐藏起来.

### 十. 让Home保持原来的状态

#### 10.1. 让Home不要随意销毁掉

*   keep-alive

#### 10.2. 让Home中的内容保持原来的位置

*   离开时, 保存一个位置信息saveY.
*   进来时, 将位置设置为原来保存的位置saveY信息即可.
    *   注意: 最好回来时, 进行一次refresh()

非父子组件通信:

https://www.jb51.net/article/132371.htm

我们在用Vue进行前端开发的时候，往往会遇到有很多个组件内，他们都有类似的data，类似的方法。这些大量重复的代码，如果正常编写出来，代码既不美观也不优雅，而且看起来也相当复杂。所以vue官方提供了一个极其好用的方式来解决这个问题

### 那就是mixin

先来看看官方的介绍

> 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

在Java开发中 如果我们遇到两个类有大量相似代码的时候，我们通常会定义一个父类，来讲这些重复代码写在一起，然后再让这两个类来继承父类的代码和方法。

    class Animal{
    	run(){}
    }
    class Person extends Animal{
    	//run(){}
    }
    class Dog extends Animal{
    	//run(){}
    }


而在Vue中，每个组件export出来的是对象，所以不能像类那样继承，于是Vue提供了类似于类的继承的方法 **mixin**

使用方法，在这里贴上自己项目的部分代码。

#### 定义一个mixin.js 文件

    import {debounce} from './utils';

    export const itemListenerMixin = {
        data(){
            return {
                itemImgListener: null,
            }
        },
        methods:{

        },
        mounted(){
            let newRefresh = debounce(this.$refs.scroll.refresh, 100)

            this.itemImgListener = () => {
                newRefresh()
            }

            this.$bus.$on('itemImgLoad', this.itemImgListener)
            console.log("我是混入的东西")
        }
    }


mixin 里就跟一个正常的Vue的组件没有任何的区别，可以定义data，methods，生命周期函数等等。跟Java里面的父类和子类完全一样。只是调用的方法不一样而已。

两个调用mixin.js的组件

#### Detail.vue

    import {itemListenerMixin} from "common/mixin";

    mixins: [itemListenerMixin],
    //其余代码均省略


#### Home.vue

    import {itemListenerMixin} from "common/mixin";

    mixins: [itemListenerMixin],
    //其余代码均省略


只需要这样一小段代码，就可以调用到mixin.js 内定义的组件了。

而且在两个组件内，作用完全一样

当我们在组件上应用Mixin的时候，有可能组件与Mixin中都定义了相同的生命周期钩子，这时候钩子的**执行顺序**的问题凸显了出来。默认Mixin上会首先被注册，组件上的接着注册，这样我们就可以在组件中按需要重写Mixin中的语句。_**组件拥有最终发言权**_。当发生冲突并且这个组件就不得不“决定”哪个胜出的时候，这一点就显得特别重要，否则，所有的东西都被放在一个数组当中执行，Mixin将要被先推入数组，其次才是组件。

    const myMixin = {
    	mounted() {
    	console.log('mixin!')
    	}
    }

    new Vue({
    	el: '#app',
    	mixins: [myMixin],
    	mounted() {
    	console.log('Vue instance!')
    	}
    });

      //Output in console
      > mixin!
      > Vue instance!


    //mixin
    const myMixin = {
    	methods: {
    	sayHello: function() {
    		console.log('mixin!')
    	}
    },
    	mounted() {
    		this.sayHello()
    	}
    }

    //vue instance or component
    new Vue({
    	el: '#app',
    	mixins: [myMixin],
    	methods: {
    	sayHello: function() {
    	console.log('Vue instance!')
    	}
    },
    mounted() {
    	this.sayHello()
    	}
    })

    // Output in console
    > Vue instance!
    > Vue instance!


我们可以看到，当他们之间没有发生同名冲突的时候，两个都正常打印了。而当他们发生冲突之后。你可以看到这里打印了两个Vue instance。这是因为第一个函数被调用之后，并没有被销毁，而是被重写了。然后被调用了两次

当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。

##### 选项合并

*   数据对象（data）在内部会进行递归合并，在和组件的数据发生冲突时以组件数据优先。
*   同名钩子函数（created,mounted…）将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
*   值为对象的选项（methods, components 和 directives）将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。

需要注意的是

> 谨慎使用全局混入对象，因为会影响到每个单独创建的 Vue 实例 (包括第三方模板)。大多数情况下，只应当应用于自定义选项。也可以将其用作 [Plugins](https://links.jianshu.com/go?to=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Fplugins.html) 以避免产生重复应用

所以Vue对mixin 设定了 **自定义选项合并策略**

> 自定义选项将使用默认策略，即简单地覆盖已有值。如果想让自定义选项以自定义逻辑合并，可以向 `Vue.config.optionMergeStrategies` 添加一个函数：

    Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
      // 返回合并后的值
    }


对于多数值为对象的选项，可以使用与 `methods` 相同的合并策略：

    var strategies = Vue.config.optionMergeStrategies
    strategies.myOption = strategies.methods



css 文件的引用 assets -> css -> normalize.css(初始化 css 样式库) assets -> css -> base.css(项目的 css) 将 normalize 合并到 base.css( @import "./normalize.css") 将 base.css 引入到 App.vue( @import "assets/css/base.css" ) 最后项目打包的时候是 main.js 主函数 找到 APP.vue 最后找到引入的 base.css base.css 使用了 :root 获取根元素 html 定义项目中所需要的的 css 变量

项目上传 github 不上传 node_modules 的包 上传到 git 的时候,没有把 node 的包传上去，但是下载回来的时候 命令行运行 npm install 会把 package-lock.json 的配置下载回来

### vue-cli 3.x 里面看不到配置文件 但是如何自己配置呢？
自己在根目录创建`vue.config.js` 配置自己的 webpack 配置
项目编译后 最后会和公共的 webpack 会合并的 自己配置的动态路径 就不需要写类似于 ../../ 这种太过于麻烦的写法了 module.exports = { configureWebpack: { resolve: { alias: { 'components': '@/components', 'content': 'components/content', 'common': 'components/common', 'assets': '@/assets', 'network': '@/network', 'views': '@/views', } } } } 使用 vue-cli 2.x 默认生成 editorconfig 目的是不同 IDE 中保持一致的代码风格 vue-cli 3.x 可以自己创建这个文件来配置自己的代码做统一风格

整个项目的骨架 tabbar 可复用组件 components -> common -> tabbar 根据项目需求在 content 里面封装 mainTabbar 组件 在 APP.vue 引入 创建路由 index.js 配置 tabbar 和路由的关系 mode:history 采用 history 模式 路由懒加载的使用 => 为给客户更好的客户体验，首屏组件加载速度更快一些，解决白屏问题

### icon 图标的引入 `public -> index.html (<link rel="icon" href="<%= BASE_URL %>logo.png">)` 这是 jsp 的语法,为什么能被运行?
因为,最后这个 index.html 文件会被打包到 dist 文件夹下,会被编译成可以使用的语法

首页的开发 采用组件化封装的思想，在 view -> home -> 创建 childComps 文件用于存放首页 home 的功能模块 需要注意的是 vue 组件中 template 模板中的资源文件的引入需要在前面加 ~ 符号
