import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    llista:[],
    userLogged: null
  },
  getters: {
    getLlista: state => {
      return state.llista;
    },
    getBool: state => {
      return state.bool;
    },
    getUserLogged: state => {
      return state.userLogged;
    }
  },
  mutations: {
    logIn(state, EmailPass) {
      for (let i = 0; i < state.llista.length; i++) {
        console.log(state.llista);
        if(state.llista[i].email == EmailPass.email && state.llista[i].pwd == EmailPass.pass) { state.userLogged = EmailPass.email; }
      }
    },
    afegeixElement:function(state, element){
      state.llista.push(element);
    },
  },
  actions: {
  },
  modules: {
  }
})
