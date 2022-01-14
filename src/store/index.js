import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
<<<<<<< Updated upstream
  },
  modules: {
=======
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
       },1000)
     }).then(res=>commit('setPaymentListData',res))
    }

>>>>>>> Stashed changes
  }
})
