//Importamos Vistas
import { list } from './views/list';
import { select } from './views/select';
import { filter } from './views/filters';
import { upButton } from './functions/functions'
import { menuButton } from './functions/functions'


//Importamos estilos
import './styles/styles.scss';


const addListerners = () => {
    document.getElementById('all').addEventListener('click', list);
    document.getElementById('form').addEventListener('submit', filter);
}

window.onload = () => {
    window.scrollTo(0,0);
    addListerners();
    select();
    upButton();
    menuButton();
}