<template>
  <div class="wrapper">
    <div class="item" v-for="item in items" :key="item">
        {{item}}
    </div>
    </div>
</template>
<script>
export default {
  name: "Payments",
  props: {
    items: { 
        type: Array,
         default: () => [] },
  },
};
</script>
