import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: () => import('../views/Menu.vue')
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/Friends.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/user/not/login')
        }
      }
    },
    {
      path: '/friends/new',
      name: 'friendsNew',
      component: () => import('../views/FriendsNew.vue'),
    },
    {
      path: '/user/not/login',
      name: 'UserNotLogin',
      component: () => import('../views/UserNotLogin.vue'),
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/Collection.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../views/Play.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../views/Career.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/entry')
        }
      }
    },
    {
      path: '/entry',
      name: 'entry',
      component: () => import('../views/ProfileLogin.vue'),
    },

  ]
})

