import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Register from '@/components/Register' // Import the Register component
import Login from '@/components/Login' // Import the Login component
import Song from '@/components/Song' // Import the Song component
import CreateSong from '@/components/CreateSong' // Import the CreateSong component
import ViewSong from '@/components/ViewSong/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // Base path http://localhost:8080/#/
      name: 'root',
      component: Root
    },
    { // create a register route http://localhost:8080/#/register
      path: '/register',
      name: 'register',
      component: Register
    },
    { // create a register route http://localhost:8080/#/login
      path: '/login',
      name: 'login',
      component: Login
    },
    { // create a register route http://localhost:8080/#/song
      path: '/song',
      name: 'song',
      component: Song
    },
    {// create a register route http://localhost:8080/#/song/create
      path: '/song/create',
      name: 'song-create',
      component: CreateSong
    },
    {// create a register route http://localhost:8080/#/song/:songId
      path: '/song/:songId',
      name: 'view-song',
      component: ViewSong
    }
  ]
})
