import Vue from 'vue';
import Vuex from 'vuex';

import articles from './articles';
import categories from './categories';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles,
    categories,
  },
});