import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList:[]
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload
    }
  },
  getters: {
    getPaymentLIst: (state) => {
      return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0)
       },
    getPaymentLIstAll: state => state.paymentsList,
  }
})


