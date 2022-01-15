<template>
  <div class="wrapper">
    <div class="header">add new Payment</div>
    <div class="content">    
    
      <AddPaymentForm v-if="settings.content ==='addPaymentForm'"/>
     
    </div>
    <div class="footer">
      <button @click="onclickClose">close</button>
    </div>
  </div>
</template>
<script>
import AddPaymentForm from "./addPayment.vue";


export default {
  props: {
    settings: {}
  },
  components: {
    AddPaymentForm,

  },
  methods: {
    onclickClose() {
      this.$modal.hide();
    },
  },
};
</script>
