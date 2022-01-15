<template>
  <div class="wrapper">
    <header>
      <router-link to="/Dashboard"
        >добавить платеж категории Food с ценой 200</router-link
      >
      /
      <router-link to="/notFound"
        >добавить платеж категории Transport с ценой 50</router-link
      >

      <a href="#Dashboard"></a>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <router-view />
<modalwindow v-if="addFormShow" :settings="settings"/>
      <payment :items="paymentsList" />
     
      
    </main>
  </div>
</template>
<script>
import modalwindow from "./components/modalwindowform.vue"
import payment from "./components/payment.vue";
import { mapMutations, mapGetters } from "vuex";



export default {
  components: { payment,modalwindow},
  name: "App",
  data() {
    return {
      show: true,
      page: "",
      settings: {
  
      },
  addFormShow:true,
      componentName:""
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentLIstAll" }),
    total() {
      return this.$store.getters.getPaymentLIstAll;
    },
  },

  methods: {
    ...mapMutations("setPaymentListData"),
    setPage() {
      this.page = location.hash.slice(1);
    },
    addPayData(data) {
      this.paymentsList.push(data);
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
    OnShow(name,settings){

     this.componentName=name;
     this.settings=settings
      

    },
    onClosed(){
      debugger
      this.settings={}
      this.componentName=""
    },

  },
  mounted() {
    this.$modal.EventBus.$on("show",this.OnShow);
    this.$modal.EventBus.$on("close",this.onClosed);


    this.setPage();
  },
  beforeDestroy(){
     this.$modal.EventBus.$off("show");
    this.$modal.EventBus.$off("close");

  },

  created() {
    this.$store.dispatch("fetchData");
    this.$store.commit("setPaymentListData", this.fetchData());
  },
};
</script>


<style lang="scss">
.title {
  font-size: 20px;
}
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
</style>
