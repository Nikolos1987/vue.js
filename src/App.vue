<template>
<<<<<<< Updated upstream
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
=======
  <div class="wrapper">
    <header>
      <router-link to="/Dashboard">добавить платеж категории Food с ценой 200</router-link> /
       <router-link to="/notFound">добавить платеж категории Transport с ценой 50</router-link>
 

      <a href="#Dashboard"></a>
      <div class="title">My personal costs</div>
    </header>
    <main>
     <router-view/>
      <!-- <addpayment @addpayment="addPayData" /> -->
      <payment :items="paymentsList" />
      <!-- <div class="total" v-if="total"> total {{total}}</div> -->
     <modalwindow :settings="settings" v-if="componentName"  />
      <button @click="openmodal">add new cost+</button>
    </main>
  </div>
</template>
<script>

import payment from "./components/payment.vue";

import {mapMutations,mapGetters} from 'vuex';
import modalwindow from "./components/ModalWindowAddPaymentForm.vue"


export default {
  components: { payment,modalwindow },
  name: "App",
  data() {
    return {
      show: true, 
      page :"",
      addFormShow:false,
      settings: {},
      componentName:""
    };
  },
  computed:{
...mapGetters({paymentsList:"getPaymentLIstAll"}),  
 total(){
    return this.$store.getters.getPaymentLIstAll
 }
  },
  
  methods: {
    
    ...mapMutations("setPaymentListData"),
    setPage(){
      this.page = location.hash.slice(1)
    },
    addPayData(data) {
      this.paymentsList.push(data)
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
      openmodal(){
        this.$modal.show('dashboard',{content:"adPaymentform"},{header:"add new cost"})
      },
      shows(data){
        console.log(data)
        debugger
  


      },
      closed(){
       this.settings= {},
      this.componentName=""

      },

  },
 mounted (){
   this.setPage()
   this.$modal.EventBus.$on('show',this.shows())
   this.$modal.EventBus.$on('close',this.closed())
 },
 beforeDestroy(){
   this.$modal.EventBus.$off('show')
   this.$modal.EventBus.$off('close')
 },
  
  created() { 
    
 
  this.$store.dispatch('fetchData')

  },
 
};
</script>

>>>>>>> Stashed changes

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.res{
  color:red
  
}
.wrappe{
    background:blue;
    z-index: 100;
 
}
</style>
