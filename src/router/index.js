import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Portfolio from '@/views/Portfolio.vue'
import Contact from '@/views/Contact.vue'
import Placeholder from '@/views/projects/Placeholder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio/placeholder',
    name: 'Placeholder',
    component: Placeholder
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'current',
  routes
})

// Sets it so that the title of the page is changed when the route changes.
router.beforeEach((to, from, next) => {
  if (to.name == 'Home') {
    document.title = 'ALEX';
  } else {
    document.title = to.name + ' | ALEX';
  }
  next();
});

export default router
