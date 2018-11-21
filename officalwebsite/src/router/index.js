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
    // meta: {
    //   requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    // },
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
  {path:'*',redirect:{path:'/login'}},
]

const router=new Router({
  routes:routes

})
router.beforeEach((to, from, next) => {
  //token验证 页面跳转验证
  let token = window.localStorage.getItem('token');
  console.log(token)
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
  //登录验证
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
         if (localStorage.getItem('username')) {// 判断是否登录
             next()
           } else {// 没登录则跳转到登录界面
             next({
                 path: '/login',
                 query: {redirect: to.fullPath}
            })
           }
       } else {
         next()
       }
})
axios.interceptors.request.use(config=> {
    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  });
axios.interceptors.response.use(response=>{
  console.log(response)
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
        // store.commit()
          routes.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
      }
    }
  }
)
export default router
