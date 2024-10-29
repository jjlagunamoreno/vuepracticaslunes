<template>
  <div>
    <h1>Collatz Component</h1>
    <hr />
    <label> Introduce número: </label>
    <input type="number" v-model="numero" />
    <button @click="getCollatzSequence()">Collatz</button>
    <ul>
      <li
        v-for="numero in numeros"
        :key="numero"
        v-html="$filters.getNumeroParoImpar(numero)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  data() {
    return {
      numeros: [],
    };
  },
  methods: {
    getCollatzSequence() {
      this.numeros = [];

      // Construir la secuencia de Collatz
      while (this.numero !== 1) {
        this.numeros.push(this.numero);
        if (this.numero % 2 === 0) {
          this.numero = this.numero / 2;
        } else {
          this.numero = this.numero * 3 + 1;
        }
      }
      this.numeros.push(this.numero);
    },
  },
};
</script>

<style>
ul li {
  list-style: none;
}
</style>
