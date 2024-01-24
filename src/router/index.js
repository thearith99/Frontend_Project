import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
// import Login from '@/views/Login.vue';
// import Register from '@/views/Register.vue';
// import Category from '@/views/Category.vue';
import YearTwo from '@/views/YearTwo.vue'
import YearThree from '@/views/YearThree.vue'
import YearFour from '@/views/YearFour.vue'
import YearFive from '@/views/YearFive.vue'

const routes = [
  { path: '/', component: Home },
  // { path: '/login', component: Login },
  // { path: '/register', component: Register },
  { path: '/year_two', component: YearTwo },
  { path: '/year_three', component: YearThree },
  { path: '/year_four', component: YearFour },
  { path: '/year_five', component: YearFive },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;

