import Vue from 'vue';
import App from './App.vue';
import { makeServer } from './server';
import store from './store/index';
import Vuelidate from '@vuelidate/core';

Vue.use(Vuelidate);

import './assets/main.css';

makeServer();

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');