<template>
    <div>
        <button @click="click">добавить платеж категории Food с ценой 200</button>
    </div>
</template>
<script>
import { mapMutations } from "vuex";

export default({
    name:'db',
     data() {
    return {
      date: "",
      category: "Food ",
      value: "200",
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
