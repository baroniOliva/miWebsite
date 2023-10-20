import React, { useState } from 'react';
import AcercaDeMi from '../acercaDeMi/acercaDeMi';
import MainDos from '../MainDos/MainDos'

function PaginaDos_Lista (){

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const mostrarPagina = () => {
      if (opcionSeleccionada == null) {
        return <MainDos />;
      } else if (opcionSeleccionada === 'AboutMe') {
        return <AcercaDeMi />;
        
      }
      return null;
    };
  

    return(
       
<div>

<ul className='paginaDos_lista'>
        <li onClick={() => setOpcionSeleccionada(null)}>Principal</li>
        <li onClick={() => setOpcionSeleccionada('AboutMe')}>Acerca de Mi</li>
        <li>Tienda</li>
        <li>Videos</li>
      </ul>

    {mostrarPagina()}
    </div>
    
    )
}

export default PaginaDos_Lista;


