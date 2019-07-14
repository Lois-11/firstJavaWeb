import Vue from "vue";
import VueRouter from "vue-router";
import layout from './pages/board.vue'
import login from './pages/login.vue'
import first from './pages/first.vue'
import newaccount from './pages/new.vue'
import board from './pages/board.vue'
import pangguan from './pages/pangguan.vue'
import xiejuben from './pages/xiejuben.vue'
import xuanjuese from './pages/xuanjuese.vue'
import self from './pages/self.vue'
import recruit from './pages/recruit.vue'

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component: first
  },
  {
    path: "/login",
    name:'param',
    component: login
  },
  {
    path: "/new",
    component: newaccount
  },
  {
    path: "/board",
    name:'board',
    component: board
  },
  {
    path: "/pangguan",
    component: pangguan
  },
  {
    path: "/xiejuben",
    component: xiejuben
  },

  {
    path:"/layout",
    component: layout
  },
  {
    path:"/xuanjuese",
    component: xuanjuese
  },
  {
    path:"/self",
    component: self
  },
  {
    path:"/recruit",
    component: recruit
  }


]

var router =  new VueRouter({
  routes
})
export default router;

