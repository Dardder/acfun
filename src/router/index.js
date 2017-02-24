import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Homepage from 'components/Homepage'
import Play from 'components/Play'
import Game from 'components/Game'
import Article from 'components/Article'
import Animate from 'components/Animate'
import Music from 'components/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1234',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/Game',
      name: 'Game',
      component: Game
    },
    {
      path: '/Animate',
      name: 'Animate',
      component: Animate
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    }
  ]
})
