import view from '../views/posts.html';

//Llamada de datos a la API
const getPosts = async () => { // la llamada a la API es asincrona porque no se da de inmediato si no progresivamente
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}


export default async () => {  // la funcion debe ser asincrona para poder invocar una funcion asincrona
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const postsElements = divElement.querySelector('#posts');

    const posts = await getPosts(); // obtenemos nuestro array de posts
    console.log(posts);

    let totalPosts = divElement.querySelector('#total');
    totalPosts.innerHTML = posts.length;

    posts.forEach( post => {  // toma cada elemento del array y aplica una funcion

        postsElements.innerHTML +=  //agregamos elementos li con los posts a nuestra lista
        `
        <li class="list-group-item border-primary">
            <h5>${post.title}</h5>
            <p>${post.body}</p>
        </li>
        `;
    });    

    return divElement;
}