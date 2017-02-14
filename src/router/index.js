import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Main'
import Article from 'components/Article'
import Bloglist from 'components/BlogList'
import Us from 'components/Us'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/p/:id',
          name: 'Article',
          component: Article
        },
        {
          path: '/blog',
          name: 'Blog',
          component: Bloglist
        },
        {
          path: '/us',
          name: 'Us',
          component: Us
        }
      ]
    },
  ]
})
