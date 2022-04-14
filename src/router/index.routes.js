import {pages} from '../controllers/index';

let content = document.getElementById("root");

const router = async (route) => { // el router debe ser asincrono para poder llamar a rutas con procesos asincronos
    content.innerHTML = '';
    console.log(route);
    switch (route) {
        case '#/': {
            return content.appendChild(pages.home()); // añade como hijo el elemento div de la view al elemento root del documento 
        }
        case '#/posts':
            return content.appendChild(await pages.posts()); // esta ruta tiene un proceso asincrono
        case '#/products':
            return console.log('product');
        default:
            return content.appendChild(pages.notFound()); // añade como hijo el elemento div de la view al elemento root del documento 

    }

};

export { router };