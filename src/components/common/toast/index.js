import Toast from './Toast'

/**
 * 封装Toast插件
 */

const obj = {}

obj.install = function(Vue) {

  // 1创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2 new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()

  // 3 将组件对象，手动挂载到一个元素上
  toast.$mount(document.createElement('div'))

  // 4 toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;

}

export default obj