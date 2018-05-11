// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App';
import router from './router';
import store from './store';
import VueGoogleConfig from './assets/js/vue-google.config';

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, VueGoogleConfig);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
