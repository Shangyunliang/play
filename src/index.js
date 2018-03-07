import router from './router.js';
import app from './app.vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

new Vue({
  router,
  el: 'app',
  components: {
    app
  }
});
