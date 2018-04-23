import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Camera from '@/components/Camera'
import Info from '@/components/Info'
import Map from '@/components/Map'
import Ads from '@/components/Ads'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/info/:name',
      name: 'info',
      component: Info
    },
    {
      path: '/ads',
      name: 'ads',
      component: Ads
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
