import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Main'
import Article from 'components/Article'
import Bloglist from 'components/BlogList'
import Us from 'components/Us'
import NotFound from 'components/404'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path:'/',
          name:'Wang & Sha'
        },
        {
          path: '/blog/:id',
          name: 'Article',
          component: Article
        },
        {
          path: '/blog',
          name: '博文',
          component: Bloglist,
          children:[
            {
              path: '/blog/sort/:sortname',
              name: '博文 ',
              component: Bloglist
            },
          ]
        },
        {
          path: '/us',
          name: '我们',
          component: Us
        },
        {
          path: '/publish',
          name: '发表牢骚',
          component: Article
        },
        {
          path: '*',
          name: '能不能不瞎点',
          component: NotFound
        }
      ]
    }
  ]
})
