import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
// import Login from '@/views/Login.vue';
// import Register from '@/views/Register.vue';
// import Category from '@/views/Category.vue';
import YearOne from '@/views/YearOne.vue'

const routes = [
  { path: '/', component: Home },
  // { path: '/login', component: Login },
  // { path: '/register', component: Register },
  { path: '/year_one', component: YearOne },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;

