<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    <div class="keyboard">
      <button v-on:click="summ">+</button>
      <button v-on:click="diff">-</button>
      <button v-on:click="division">/</button>
      <button v-on:click="mult">*</button>
      <button v-on:click="pow">степень числа</button>
      <button v-on:click="natDel">%</button>
    </div>
    ={{ result }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      operand1: 1,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    summ() {
      this.result = this.operand1 + this.operand2;
    },
    diff() {
      this.result = this.operand1 - this.operand2;
    },
    division() {
      if (this.operand2 == 0) {
        this.result = "На ноль делить нельзя";
      } else {
        this.result = this.operand1 / this.operand2;
      }
    },
    mult() {
      this.result = this.operand1 * this.operand2;
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    natDel() {
      this.result = this.operand1 % this.operand2;
    },
  },
};
</script>