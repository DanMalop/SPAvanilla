import "bootstrap/dist/css/bootstrap.min.css";
import './main.scss';  // llamada al archivo de estilos css o sass, gracias a css-loader y scss-loader

import { router } from './router/index.routes';

router(window.location.hash) // se llama aca la funcion router para que al entrar a la pagina haga de inmediato la validacion del switch 

window.addEventListener('hashchange', () => {
    //Evento que escucha cada vez que la ventana del navegador altera la ruta de la url
    //console.log(window.location.hash);

    router(window.location.hash)

});