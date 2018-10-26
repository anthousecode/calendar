import Vuex from 'vuex';
// import moment from 'moment';

const createStore = () =>{
  return new Vuex.Store({
    state:{
      dateContext: new Date().toISOString().substr(0, 10)
    },
    mutations:{
      setChosenDate(state, date){
        state.dateContext = date;
      }
    },
    actions:{},
    getters:{
      chosenDate(state){
        return state.dateContext;
      }
    }
  })
}

export default createStore
