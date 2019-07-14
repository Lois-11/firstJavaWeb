// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'iview/dist/styles/iview.css' // 引入iview css样式
import iView from 'iview' // 引入iview依赖
import '../mytheme/index.less'

import router from "./router.js"
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

// import Axios from 'axios';
// import VueAxios from 'vue-axios';

import {get,post} from './utils/index'
// Vue.use(VueAxios,axios)

// Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(ElementUI);
Vue.use(iView);
Vue.prototype.$http={
  get,post
}


Vue.config.productionTip = false
Vue.use(iView) //使用iview组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
