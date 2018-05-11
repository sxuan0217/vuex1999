import axios from 'axios';
import * as rootypes from '../mutations_types';

const url = 'http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery';
const types = {
  SETDATA: 'callApi/SETDATA',
};
const state = {
  listData: [],
};
const getters = {
  getlistData: state => state.listData,
};

const actions = {
  actionsAJAX({ commit }) {
    commit(rootypes.LOADING, true);
    axios.get(url)
      .then(response => response.data)
      .then((data) => {
        commit(types.SETDATA, data);
        commit(rootypes.LOADING, false);
      })
      .catch((error) => {
        commit(rootypes.LOADING, false); 
      });
  },
};
const mutations = {
  [types.SETDATA](state, data) {
    state.listData = data;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
