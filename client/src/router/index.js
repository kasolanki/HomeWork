import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Exercise from '@/components/Exercise'
import AddEx from '@/components/AddEx'
import ViewEx from '@/components/ViewEx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
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
    }
  ]
})
