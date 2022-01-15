<template>
  <div class="wrapper">
    <header>
      <button @click="click">добавить платеж категории Food с ценой 200</button>
    </header>
    <main>
      <!-- <modalwindow v-if="addFormShow" :settings="settings"/> -->
      <button @click="openModal()">add new cost+</button>
    </main>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
// import modalwindow from "../components/modalwindowform.vue";
export default {
  components: {},
  name: "db",
  data() {
    return {
      date: "",
      category: "Food ",
      value: "200",
      addFormShow: false,
      settings: {
        content: "addPaymentForm",
        cont:"auth"

      },
    };
  },
  computed: {

    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapMutations(["addList"]),
    click() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.addList(data);
    },
    openModal() {
      this.$modal.show("dashboard", {
        content: "addPayment",
        header: "add new cost",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
