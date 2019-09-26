import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Photo from './views/Photo.vue'
import Comic from './views/Comic.vue'
import Music from './views/Music.vue'
import Video from './views/Video'
import Product from './views/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/comic',
      name: 'comic',
      component: Comic
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    
    {
      path: '/video',
      name: 'video',
      component: Video
    },





    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    
  ]
})
