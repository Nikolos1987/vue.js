<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    <div class="keyboard">
      <button title="+" v-on:click="summ">+</button>
      <button v-on:click="diff">-</button>
      <button v-on:click="division">/</button>
      <button v-on:click="mult">*</button>
      <button v-on:click="pow">степень числа</button>
      <button v-on:click="natDel">%</button>
    </div>
    ={{ result }}
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Экранная клава</label>
    <div class="moniKlava" v-show="checked">
      <button
        v-show="visual1"
        id="checkbox1"
        v-for="operand in collection"
        :key="operand"
        v-on:click="operand1 = operand1 + operand"
      >
        {{ operand }}
      </button>
      <button
        v-show="visual1"
        id="checkbox1"
        v-on:click="operand1 = operand1.slice(0, -1)"
      >
        del
      </button>
      <button
        v-show="visual2"
        id="checkbox"
        v-for="operand in collection"
        :key="operand"
        v-on:click="operand2 = operand2 + operand"
      >
        {{ operand }}
      </button>
      <button
        v-show="visual2"
        id="checkbox1"
        v-on:click="operand2 = operand2.slice(0, -1)"
      >
        del
      </button>
      <div>
        <input
          type="radio"
          id="checkbox1"
          value="true"
          name="check"
          v-on:click="check"
        />
        <label for="checkbox1">левый инпут</label>
        <input
          type="radio"
          id="checkbox"
          value="false"
          name="check"
          v-on:click="check1"
        />
        <label for="checkbox">правый инпут</label>
      </div>
    </div>
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
      operand1: "",
      operand2: "",
      result: 0,
      visual: true,
      collection: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      visual1: false,
      visual2: false,
      checked: false,
    };
  },
  methods: {
    check1() {
      this.visual1 = false;
      this.visual2 = true;
    },

    check() {
      this.visual1 = true;
      this.visual2 = false;
    },
    summ() {
      let op1 = Number(this.operand1);
      let op2 = Number(this.operand2);
      this.result = op1 + op2;
    },
    diff() {
      Number(this.operand1);
      Number(this.operand2);
      this.result = this.operand1 - this.operand2;
    },
    division() {
      Number(this.operand1);
      Number(this.operand2);
      if (this.operand2 == 0) {
        this.result = "На ноль делить нельзя";
      } else {
        this.result = this.operand1 / this.operand2;
      }
    },
    mult() {
      Number(this.operand1);
      Number(this.operand2);
      this.result = this.operand1 * this.operand2;
    },
    pow() {
      Number(this.operand1);
      Number(this.operand2);
      this.result = Math.pow(this.operand1, this.operand2);
    },
    natDel() {
      Number(this.operand1);
      Number(this.operand2);
      this.result = this.operand1 % this.operand2;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
