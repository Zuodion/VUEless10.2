import Vue from 'vue';
import Vuex from 'vuex';
import names from './modules/names'
import ages from './modules/ages'
import fruits from './modules/fruits'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    names,
    ages,
    fruits
  }
});