export const getState = state => {
  return{
  data :  state.callApi.listData
}
}
export const getLoading = state => state.loading; 
export  const getAllState = state => state