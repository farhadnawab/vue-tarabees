import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import ClassSchedule from '../views/ClassSchedule.vue'
import Clasess from '../views/Clasess.vue'
import ClassDetail from '../views/ClassDetail.vue'
import OurTrainer from '../views/OurTrainer.vue'
import Gallery from '../views/Gallery.vue'
import BlogList from '../views/BlogList.vue'
import BlogSingle from '../views/BlogSingle.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      footerTop: true
    }
  },
  {
    path: '/404',
    component: NotFound,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      footerTop: false
    }
  },
  {
    path: '/class-schedule',
    name: 'classSchedule',
    component: ClassSchedule,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/clasess',
    name: 'clasess',
    component: Clasess,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/class-detail',
    name: 'classDetail',
    component: ClassDetail,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/our-trainer',
    name: 'ourTrainer',
    component: OurTrainer,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/blog-list',
    name: 'blogList',
    component: BlogList,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/blog-single',
    name: 'blogSingle',
    component: BlogSingle,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      footerTop: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
