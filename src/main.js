/*
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 16:29:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-26 15:34:08
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFullPage from 'vue-fullpage.js'
import ElementUI from 'element-ui';
import Animate from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/icon/iconfont.css'
Vue.use(ElementUI);
Vue.use(VueFullPage);
Vue.use(Animate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
