import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const user = {
  namespaced: true,
  state: {  
    datas: [],
    errors: {}  
  },
  getters: {

    getAllErrors(state){
      return state.errors;
    }
      
  },
  actions: { 
    register(context, user) {
      axios.post('users/signup', user).then((res) => {
          context.commit('addOneUser', res)
          console.log(this.$store.getters.getAllErrors);

        })
        .catch(error => {
         
          context.commit('setError', error.response.data.error.errors);
          console.log(this.$store.getters.getAllErrors);
          //this.errors =error.response.data.error.errors
        }) 
        
    },
    login(context, user) {
      axios.post('users/login', user).then((res) => {
        context.commit('setUser', res)
        console.log(res)        
      })
      .catch(error => console.log(error))
    },

  },
  mutations: { 
    addOneUser(state, user) {
      state.datas.push(user);
    }, 
    setUser(state, user) {
      state.datas.push(user);
    },
    setError(state, error) {
      console.log('texte')
      state.errors = error
    }
    
  },
}
const comment = {
  namespaced: true,
  state: {    
  },
  getters: {   
  },
  actions: {    
  },
  mutations: {   
  },
}

export default new Vuex.Store({
 
  modules: {
    user,
    comment
  },
});
