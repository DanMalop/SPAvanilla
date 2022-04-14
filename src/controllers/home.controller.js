import view from '../views/home.html'; //puedo importar html gracias a html-loader

export default () => {
    const divElement = document.createElement('div');
    divElement.classList = 'text-white'; // Le pongo una clase de bootstrap al elemento div
    //Pero tambien se puede añadir una clase en el html de view
    divElement.innerHTML = view;
    
    const btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('click', () => { // no olcidar las comillas del nombre del evento
        alert('holaaaaa');
    });

    return divElement;
}