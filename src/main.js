import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Routes from './router/router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
