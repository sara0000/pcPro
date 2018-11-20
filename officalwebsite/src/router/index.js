import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import home from '@/components/home'
import user from '@/components/user'
import Login from '@/components/Login'
import Register from '@/components/Register'
import forgetPassword from '@/components/forgetPassword'
import content1 from '@/components/common/content1'
import UserPosts from '@/components/common/UserPosts'

Vue.use(Router)
Vue.prototype.axios=axios;
const routes= [
  {
    path: '/',
    redirect: {
      path: '/login',
      name: 'Login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: forgetPassword
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [
      {
        path:'user',
        component:user
      },
      {
        path: 'profile',
        component: content1
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    children: [

    ]
  }
]

export default new Router({
  routes

})
