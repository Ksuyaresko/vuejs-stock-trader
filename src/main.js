import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Portfolio from './components/portfolio/portfolio.vue'
import Stock from './components/stocks/stocks.vue'
import {store} from './store/store'
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stocke-trader-test.firebaseio.com/';
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});
const routes = [
  { path: '', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stock }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
