<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <calc msg="Welcome to Your calc App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/calcul.vue'
import calc from '@/components/calc.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    calc

  }
}
</script>
