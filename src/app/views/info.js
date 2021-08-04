import { fetchInfo } from '../api/call-to-api-info';
import { cambiarURL } from './list'



const info = async (url = `https://rickandmortyapi.com/api/character`) => {
    
    const listPromise = await fetchInfo(url);
    pintarInformacion(listPromise);

}

function pintarInformacion(informacion) {


    const insertar = document.getElementById('container_info');
    const containerDiv = document.createElement('div');
    const btnPrev = document.createElement('button');
    const btnNext = document.createElement('button');

    limpiarHTML(insertar);

    const { prev, next, pages } = informacion;

    

    containerDiv.classList.add('b-info');
    containerDiv.innerHTML = `
        <div id="contador_pagina" class="b-info__element"></div>
        <div class="b-info__element"></div>
        <div class="b-info__element"></div>
    `;

    btnPrev.classList.add('b-button', 'b-button--amarillo');
    btnPrev.textContent = 'Anterior';
    btnPrev.onclick = () => prevPage(prev);

    btnNext.classList.add('b-button', 'b-button--amarillo');
    btnNext.textContent = 'Siguiente';
    btnNext.onclick = () => nextPage(next);


    containerDiv.children[1].appendChild(btnPrev);
    containerDiv.children[2].appendChild(btnNext);
    insertar.appendChild(containerDiv);
    
    actualizarContador(next, pages);
}

function actualizarContador(pagina) {

    if (pagina === null) {
        document.getElementById('contador_pagina')
            .textContent = `Página final`;
        return;

    } else { 

            if (pagina.includes('&')) {
                const siguiente = Number(pagina.split('=')[1].split('&')[0]);
                const paginaActual = siguiente - 1;

                pintarPagina(paginaActual);
            } else {
            
            const siguiente = Number(pagina.split('=')[1]);
            const paginaActual = siguiente - 1;

            pintarPagina(paginaActual); 
        }
    }
}

function pintarPagina(paginaActual) {
    document.getElementById('contador_pagina')
        .textContent = `Página ${paginaActual}`;
}

function limpiarHTML(contenido) {
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}

function prevPage(prev) {
    
    if (prev !== null) {
        info(prev);
        cambiarURL(prev)
        fetchInfo(prev)
    }
}

function nextPage(next) {

    if (next !== null) {
        info(next);
        cambiarURL(next)
        fetchInfo(next)
    }
}

export { info, pintarInformacion };