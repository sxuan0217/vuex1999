import axios from 'axios';
import * as rootypes from '../mutations_types.js';
const url ='http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery'
const types ={
  SETDATA:'callApi/SETDATA'
}
const state = {
  listData:[]
}
const getters = {
 getlistData : state => state.listData
}

const actions = {
  actionsAJAX({commit}){
    commit(rootypes.LOADING,true)
    axios.get(url)
    .then(function (response) {
      return response.data
    })
    .then(function(data){
      commit(types.SETDATA,data)
      commit(rootypes.LOADING,false)
    })
    .catch(function (error) {
      console.log(error);
      commit(rootypes.LOADING,false)      
    });
    

  }
}
const mutations ={
  [types.SETDATA](state,data){
    state.listData = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
