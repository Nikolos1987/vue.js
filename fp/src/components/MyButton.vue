<template>
  <div>
    <button @click="onClick">Clicked {{ counter }} times!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
    mouseOver(){
        console.log('Hovered on button')
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    const btn = this.$el.querySelector('button')
    if(btn) {
        btn.addEventListener('mouseover', this.mouseOver)
    }
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    const btn = this.$el.querySelector('button')
    if(btn) {
        btn.removeEventListener('mouseover', this.mouseOver)
    }
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
