//React
import React from 'react';
//Estilos
import './Error.css';
//imagenes
import fondo from '../../img/page_not_found.png';

//Vista de la pagina de error
const Error = () => {
    return (
        <div className='ErrorPage'>
            <img src={fondo} alt="Pagina no encontrada"></img>
        </div>
    )
}

export default Error
