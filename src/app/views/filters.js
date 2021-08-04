import { fecthFilter } from '../api/call-to-api-filter';
import { menuScroll } from '../functions/functions';

const filter = async (e) => {
    e.preventDefault();

    const statusValue = document.getElementById('Alive').value.toLowerCase();
    const specieValue = document.getElementById('Human').value.toLowerCase();
    const genderValue = document.getElementById('Male').value.toLowerCase();
    const nombreValue = document.getElementById('nombre').value.toLowerCase();

    const valoresFiltro = {
        statusValue,
        specieValue,
        genderValue,
        nombreValue
    }

    if( validarFiltros(valoresFiltro) ) {
        mostrarAlerta('Mínimo un filtro');
        return;
    }

    const parametro = `?name=${nombreValue}&status=${statusValue}&specie=${specieValue}&gender=${genderValue}`;

    await fecthFilter(parametro);
    menuScroll();

}

function validarFiltros(objeto) {
    return Object.values(objeto).every(element => element == '') ;
}

function mostrarAlerta(mensaje) {
    const container = document.getElementById('mensaje_alerta');
    const text = document.createElement('p');
    text.textContent = mensaje;

    container.innerHTML = '';
    container.appendChild(text);

    setTimeout(() => {
        text.remove()
    }, 3000);
}

export { filter, mostrarAlerta }







