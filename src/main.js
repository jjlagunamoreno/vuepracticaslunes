import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

//COMENZAMOS SEPARANDO NUESTRA CREACCIÓN DE APLICACION EN UNA VARIABLE
var app = createApp(App)

app.config.globalProperties.$filters = {
    //CREAMOS EL MÉTODO PARA VER SI ES PAR O IMPAR Y DEVOLVER EL COLOR EN COMPONENTE COLLATZ.
    getNumeroParoImpar(numero) {
        if (numero % 2 === 0 && numero !== 0) {
            return "<h4 style='color:green'>" + numero + "</h4>";
        } else if (numero % 2 !== 0) {
            return "<h4 style='color:red'>" + numero + "</h4>";
        } else {
            return "<h4 style='color:black'>" + numero + "</h4>";
        }
    },
    //CREAMOS LOS MÉTODOS PARA PARA EL COMPONENTE TABLAMULTIPLICAR. PARA RELLENAR LA TABLA CON SU OPERACIÓN Y EL RESULTADO.
    getOperacion(num, i) {
        return `${num} x ${i}`;
    },
    getMultiplicacion(num, i) {
        return num * i;
    },
}

app.use(router).mount('#app')
