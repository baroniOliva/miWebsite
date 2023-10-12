import React, { useState } from 'react';
import './componentesDos/extrasDos/cssDos/paginaDos.css';
import backgroundDos from './componentesDos/extrasDos/BackgroundDos/backgroundDos.jpg'
import MainDos from './componentesDos/pagesDos/MainDos/MainDos';
import AcercaDeMi from './componentesDos/pagesDos/acercaDeMi/acercaDeMi';

function PaginaDos() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const mostrarPagina = () => {
    if (opcionSeleccionada == null) {
      return <MainDos />;
    } else if (opcionSeleccionada === 'AboutMe') {
      return <AcercaDeMi />;
    }
    return null;
  };

 

  return (
    <div className='paginaDos_Container' style={{backgroundImage:`url(${backgroundDos})`}}>


<ul className='paginaDos_lista'>
        <li onClick={() => setOpcionSeleccionada(null)}>Principal</li>
        <li onClick={() => setOpcionSeleccionada('AboutMe')}>Acerca de Mi</li>
        <li>Tienda</li>
        <li>Videos</li>
      </ul>

      {mostrarPagina()}
  
     </div>
  );
}

export default PaginaDos;
