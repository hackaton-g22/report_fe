import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import HomeAdmin from './components/HomeAdmin.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
  },
  {
  path: '/user/logIn',
  name: "logIn",
  component: LogIn
  },
  {
  path: '/user/signUp',
  name: "signUp",
  component: SignUp
  },
  {
  path: '/user/home',
  name: "home",
  component: Home
  },
  {
    path: '/user/admin',
    name: "homeAdmin",
    component: HomeAdmin
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;