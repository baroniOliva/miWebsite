import './firstPage.css';
import React, { useState } from 'react';
import background from './index_image.jpg';
import background_responsive from './index_image_responsive.jpg';

function FirstPage({ setOpcionSeleccionada }) {
  const handleClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <div className='firstPage_container'>
      <div className='firstPageBkg' style={{ backgroundImage: `url(${background})` }}>
        <div className='firstPageOpcion' onClick={() => handleClick('opcionUno')}></div>
        <div className='firstPageOpcion' onClick={() => handleClick('opcionDos')}></div>
      </div>
      <div className='firstPageBkg_responsive' style={{ backgroundImage: `url(${background_responsive})` }}>
        <div className='firstPageOpcion' onClick={() => handleClick('opcionUno')}></div>
        <div className='firstPageOpcion' onClick={() => handleClick('opcionDos')}></div>
      </div>
    </div>
  );
}

export default FirstPage;