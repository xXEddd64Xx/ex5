import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    llista:[],
    emails:[],
    userLogged: String
  },
  getters: {
    getLlista: state => {
      return state.llista;
    },
    getUserLogged: state => {
      return state.userLogged;
    }
  },
  mutations: {
    buscarEmail(state, email) {
      for (let i = 0; i < state.llista.length; i++) {
        state.emails.push(state.llista[i].email)
      }
      if (state.emails.includes(email)) {  
        alert("Entra");
        return true;
      } else { alert("no entra") ;return false; }
    },
    afegeixElement:function(state, element){
      state.llista.push(element);
    },
    eliminarElement:function(state, pos){
      /* let posicio = state.llista.indexOf(element); */
      state.llista.splice(pos, 1);
    },
    setUserLogged:function(state, lUserLogged) {
      console.log(lUserLogged);
      console.log(state.llista);
      state.userLogged = lUserLogged;
    }
  },
  actions: {
  },
  modules: {
  }
})
