<template>
  <div class="wrapper">
    <div class="values">
     
      <div class="date">
  
        <p class="pnmb">Дата</p>
         <div class="date" v-for="(item,numb) in items" :key="numb">
           {{numb+1}}
           <span> {{ item.date }}</span>         
         </div>
      </div>
      <div class="category">
        <p>Категория</p>
       <div class="item" v-for="item in items" :key="item">
           {{ item.category}}  
        </div>
      </div>
      <div class="summ">
        <p>сумма</p>
        <div class="item" v-for="item in items" :key="item">
            {{item.value}}
      </div>
    </div>  
  

  
    </div>
  </div>
</template>
<script>
export default {
  name: "Payments",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.item {
  display: flex;
}
.category{
    margin-left: 50px;
}
.summ{
   margin-left: 50px;  
}

.values {
  display: flex;
}
.pnmb{
    margin-left: 50px;
}
.date{
    margin-left: 20px;
}
span{
    padding-left: 20px;
}
</style>