<template>
  <div class="wrapper">
    <div class="header">Add new payment</div>
    <div class="content">
      <AddPaymentForm />
    </div>
    <div :class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>
 
<script>
import AddPaymentForm from "./addPayment.vue"
export default {
    components:{AddPaymentForm},
  methods: {
    onCloseClick () {
      this.$emit('close')
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
}
</script>
<style lang="css" scoped>
.wrapper{
    background: burlywood;
    z-index: 100;
 
}
</style>