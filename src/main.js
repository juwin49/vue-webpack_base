import Vue from 'vue'

import Router from 'vue-router'
//import Resource from 'vue-resource'
//import VueTouch from 'vue-touch'

import bootstrap from 'bootstrap'


Vue.use(Router);
//Vue.use(Resource);
//Vue.use(VueTouch);

import App from './App.vue'
import home from './page/home.vue'
import login from './page/login.vue'
import Scroll from './page/scroll.vue'

// 创建一个路由器实例
// 并且配置路由规则
const routes = [
{path:'/home',component:home},
{path:'/login',component:login},
{path:'/scroll',component:Scroll},
{path: '*',redirect: '/home'}// 其他没有的页面都重定向到 home页面去
];

const router = new Router({
 routes
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
	 el:"#app",
     router,
	 render:h=>h(App)
 });