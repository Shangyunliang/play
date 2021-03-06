import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({ routes: routes });

router.beforeEach((to, from, next) => {
  next();
})
router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router;
