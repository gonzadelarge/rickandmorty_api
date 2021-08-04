
const fetchSelect = async () => {

    const url = `https://rickandmortyapi.com/api/character`;
    const respuesta = await fetch(url).catch((err) => { console.log(err); })

    // Controlamos si hay un Error de Servidor -> 500 // Error de cliente -> 400 // Redirecciona -> 300
    if (respuesta.status !== 200) {
        return Promise.reject;
    }

    const transformarJsonRespuesta = await respuesta.json();
    const informacion = transformarJsonRespuesta.results;

    return informacion;
}

export { fetchSelect }