import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register' // Import the Register component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // Base path http://localhost:8080/#/
      name: 'HelloWorld',
      component: HelloWorld
    },
    { // create a register route http://localhost:8080/#/register
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
