import { pintarPersonaje, limpiarHTML } from "../views/list";
import { pintarInformacion } from "../views/info";
import { mostrarAlerta } from "../views/filters"

const fecthFilter = async (parametro) => {

    const url = `https://rickandmortyapi.com/api/character/${parametro}`;
    const respuesta = await fetch(url).catch((err) => { console.log(err); })

    // Controlamos si hay un Error de Servidor -> 500 // Error de cliente -> 400 // Redirecciona -> 300
    if (respuesta.status !== 200) {
        mostrarAlerta('La búsqueda ha sido infructuosa');
        limpiarHTML();
        return Promise.reject;
    }

    const transformarJsonRespuesta = await respuesta.json();
    const informacion = transformarJsonRespuesta.info;
    const personajes = transformarJsonRespuesta.results;

    limpiarHTML();

    pintarInformacion(informacion);

    personajes.forEach( (personaje) => {
        pintarPersonaje(personaje);
    });

    return personajes;

}

export { fecthFilter }