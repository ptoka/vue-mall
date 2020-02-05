import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabbar from './tabbar'

//解决push报错 Uncaught (in promise)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

/// ...扩展运算符
const routes = [...Tabbar]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
