import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CollatzComponent from './components/CollatzComponent.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/tablamultiplicar", component: TablaMultiplicar
    },
    {
        path: "/collatz", component: CollatzComponent
    }
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;
