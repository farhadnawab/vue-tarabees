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
    path: '/404',
    component: NotFound,
    meta: {
      footerTop: false
    }
  },
  {
    path: '*',
    redirect: '/404',
    meta: {
      footerTop: false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      footerTop: true
    }
  },
  {
    path: '/about',
    name: 'About',
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
    name: 'ClassSchedule',
    component: ClassSchedule,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/clasess',
    name: 'Clasess',
    component: Clasess,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/class-detail',
    name: 'ClassDetail',
    component: ClassDetail,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/our-trainer',
    name: 'OurTrainer',
    component: OurTrainer,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/blog-list',
    name: 'BlogList',
    component: BlogList,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/blog-single',
    name: 'BlogSingle',
    component: BlogSingle,
    meta: {
      footerTop: false
    }
  },
  {
    path: '/contact',
    name: 'Contact',
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
