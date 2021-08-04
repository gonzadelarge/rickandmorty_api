import { fetchList } from '../api/call-to-api-list';
import { info } from './info';
import { menuScroll } from '../functions/functions';

let endPoint = `https://rickandmortyapi.com/api/character`;

function cambiarURL(url) {
    endPoint = url;
    list();
}

const list = async () => {
    const listPromise = await fetchList(endPoint);
    limpiarHTML();
    info(endPoint);
    menuScroll();
    listPromise.forEach(personaje => {
        pintarPersonaje(personaje);
    });
    
}


function pintarPersonaje(personaje) {

    const containerCharacters = document.getElementById('container_characters');
    const containerDiv = document.createElement('div');

    const { name, status, species, gender, image, location } = personaje;

    containerDiv.classList.add('b-main__caracter');
    containerDiv.innerHTML = `
        <div class="b-main__img"><img src="${image}" alt=""></div>
        <div class="b-main__head"><h3>${name}</h3></div>
        <div class="b-main__secondary">
            <div class="b-main__text">
                <p>Especie: ${species}</p>
                <p>Estado: ${status}</p>
                <p>Género: ${gender}</p>
            </div>
            <div class="b-main__url"><a href="${location.url}">Ir</a></div>
        </div>
    `;

    containerCharacters.appendChild(containerDiv);
}

function limpiarHTML() {
    const container = document.getElementById('container_characters');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export { list, cambiarURL, pintarPersonaje, limpiarHTML };