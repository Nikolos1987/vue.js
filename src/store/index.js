
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload
    },
    addList(state, payload) {
      state.paymentsList.push(payload)
    }
  },
  getters: {
    getPaymentLIst: (state) => {
      return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0)
    },
    getPaymentLIstAll: state => state.paymentsList,
  },
  actions: {
    fetchData({commit}){
     return new Promise(resolv=>{
       setTimeout(()=>{
         const items=[]
         for(let i=1;i<10;i++){
           items.push({
            date: '28.03.2020',
            category: 'Food',
            value: 169,
           })
         }
         resolv(items);
       },2000)
     }).then(res=>commit('setPaymentListData',res))
    }

  }
})


