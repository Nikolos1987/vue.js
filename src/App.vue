<template>
  <div class="wrapper">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <addpayment @addpayment="addPayData" />
      <payment :items="paymentsList" />
    </main>
  </div>
</template>
<script>
import payment from "./components/payment.vue";
import addpayment from "./components/addPayment.vue";

export default {
  components: { payment, addpayment },
  name: "App",
  data() {
    return {
      show: true,
      paymentsList: [],
    };
  },
  methods: {
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
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>


<style lang="scss">
.title{
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
