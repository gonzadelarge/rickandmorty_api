import { fetchSelect } from '../api/call-to-api-select';

const select = async () => {
    const listPromise = await fetchSelect();
    
    recogerInfoSelect(listPromise);

}

function recogerInfoSelect(resultado) {

    const listaStatus = [];
    const listaSpecie = [];
    const listaGenero = [];

    resultado.forEach(result => listaStatus.push(result.status));
    resultado.forEach(result => listaSpecie.push(result.species));
    resultado.forEach(result => listaGenero.push(result.gender));

    const superLista = [];

    superLista.push(listaStatus, listaSpecie, listaGenero);

    reducirArray(superLista);
    
}

function reducirArray (listaDeListas) {

 listaDeListas.forEach( (lista) => {

    const listaReducida = lista.reduce((acumulador, item) => {
        if(!acumulador.includes(item)){
            acumulador.push(item);
        }
        return acumulador;
    }, []);

    console.log(listaReducida)
    pintarSelect(listaReducida);

 });   


}

function pintarSelect(result) {

    result.forEach( (item) => {

        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;

        // insertar el HTML
        document.getElementById(`${result[0]}`).appendChild(option);
    })
        
}

export { select }
