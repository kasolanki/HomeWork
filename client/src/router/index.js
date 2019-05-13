import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register'
import Login from '@/components/Login'

import AddEx from '@/components/AddEx'
import ViewEx from '@/components/ViewEx'
import Exercise from '@/components/Exercise/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Exercise',
      name: 'Exercise',
      component: Exercise
    },
    {
      path: '/Exercise/Add',
      name: 'Exercise-Add',
      component: AddEx
    },
    {
      path: '/Exercise/id',
      name: 'Exercise-id',
      component: ViewEx
    },
    {
      path: '*',
      redirect: 'Exercise'
    }
  ]
})
