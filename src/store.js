import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    author: 'Wise Wrong'
}
const mutations = {
    newAuthor (state,msg){
        state.author = msg
    }
}
const actions = {}
const getters = {}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})