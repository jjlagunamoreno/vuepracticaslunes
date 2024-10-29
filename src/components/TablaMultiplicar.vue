<template>
  <div>
    <h1>TablaMultiplicar Component</h1>
    <hr />

    <label> Introduce número: </label>
    <input type="number" v-model="numero" />
    <!-- 1) Un botón y un método que genera código HTML y dibuja nuestra tabla. -->
    <button @click="getMultiplicarNumero()">Multiplicar</button>

    <h3>Botón y método</h3>
    <table>
      <thead>
        <tr>
          <th>OPERACIÓN</th>
          <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody v-html="html"></tbody>
    </table>

    <!-- 2) Generamos otra tabla mediante directivas. -->
    <h3>Directivas</h3>
    <table>
      <thead>
        <tr>
          <th>OPERACIÓN</th>
          <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ numero }} x {{ i }}</td>
          <td>{{ numero * (i) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 3) Generamos la tabla utilizando Filters.  Método que sea getOperacion y otro getMultiplicacion -->
    <h3>Filters</h3>
    <table>
      <thead>
        <tr>
          <th>OPERACIÓN</th>
          <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody>
        <!-- Bucle de 0 a 10 usando los filtros definidos -->
        <tr v-for="i in 10" :key="i">
          <td>{{ $filters.getOperacion(numero, i) }}</td>
          <td>{{ $filters.getMultiplicacion(numero, i) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      html: "",
    };
  },
  methods: {
    getMultiplicarNumero() {
      this.html = ""; // Limpiar contenido previo

      for (let i = 0; i <= 10; i++) {
        let resultado = this.numero * i;
        this.html += "<tr><td>" + this.numero + " x " + i + "</td><td>" + resultado + "</td></tr>";
      }
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
div {
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

/* Botón */
button {
  padding: 8px 16px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* Tabla */
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

/* Encabezados de la tabla */
th {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-transform: uppercase;
}

/* Celdas */
td {
  padding: 10px;
  border: 1px solid #ddd;
}

/* Filas alternas */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Estilo en hover para filas */
tr:hover {
  background-color: #ddd;
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 600px) {
  table,
  th,
  td {
    display: block;
    width: 100%;
  }

  th {
    text-align: left;
  }
}
</style>