import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Routes from './router/router';
import store from './store/store';

// Vue's addons
Vue.use(VueRouter);

// Filters
Vue.filter('snippet', function(val) {
  if(val.length > 100) {
    return val.slice(0, 100) + '...';
  } else {
  return val;
  }
});

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
