import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginComponent.vue'
import ForgotPassword from '../components/ForgotPasswordComponent.vue'
import VerifyMailSentComponent from '../components/VerifyMailSentComponent.vue'
import RegistrationComponent from '../components/RegistrationComponent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/VerifyMailSentComponent',
    name: 'VerifyMailSentComponent',
    component: VerifyMailSentComponent
  },
  {
    path: '/register',
    name: 'RegistrationComponent',
    component: RegistrationComponent
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
