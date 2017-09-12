import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import callApi from './modules/callApi'
import {state, actions, mutations} from './root.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    callApi
  },
  // 嚴格模式，禁止直接修改 state
  strict: process.env.NODE_ENV !== 'production'
})
