<template>
    <div>
        <button @click="click">добавить платеж категории Transport с ценой 50</button>
    </div>
</template>
<script>
import { mapMutations } from "vuex";

export default({
    name:'db',
     data() {
    return {
      date: "",
      category: "Transport ",
      value: "50",
    };
  },
    computed:{
        getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
   
    },

    },
    methods:{
         ...mapMutations(["addList"]),
         click() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.addList(data);
     
    },

    },
  
})
    



  
    


</script>
<style lang="scss" scoped>
</style>
