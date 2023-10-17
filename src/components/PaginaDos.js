import React, { useState } from 'react';
import './componentesDos/extrasDos/cssDos/paginaDos.css';
import backgroundDos from './componentesDos/extrasDos/BackgroundDos/backgroundDos.jpg'
import PaginaDos_Lista from './componentesDos/pagesDos/paginaDosLista/paginaDosLista';

function PaginaDos() {
 
 

  return (
    <div className='paginaDos_Container' style={{backgroundImage:`url(${backgroundDos})`}}>

<PaginaDos_Lista/>
  
     </div>
  );
}

export default PaginaDos;
