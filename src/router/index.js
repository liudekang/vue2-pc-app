import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Abort from '../views/Abort.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/home',name:'home', component: Home },
    { path: '/abort',name:'abort', component: Abort }
]


const router = new VueRouter({
    mode:'history',
    routes // (缩写) 相当于 routes: routes
})

export default router;