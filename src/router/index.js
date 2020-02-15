import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'Not Found',
      redirect: {name: 'Home'}
    }
  ],
  mode: 'history'
})
