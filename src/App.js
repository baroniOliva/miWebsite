import React, { useState } from 'react';
import './App.css';
import PaginaUno from './components/PaginaUno';
import PaginaDos from './components/PaginaDos';
import FirstPage from './components/firstPage/firstPage';

function App() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const mostrarPagina = () => {
    if (opcionSeleccionada === null){
      return <FirstPage setOpcionSeleccionada={setOpcionSeleccionada} />;
    }
    else if (opcionSeleccionada === 'opcionUno') {
      return <PaginaUno />;
    } else if (opcionSeleccionada === 'opcionDos') {
      return <PaginaDos />;
    }
    return null;
  };

  return (
    <div className="App">
      <header className='Header'>
      <h1>Mi Página React</h1>
      <div className='Header_buttons'>
      <button className='Header_button_Web' onClick={() => setOpcionSeleccionada('opcionUno')}>Conocimiento Web</button>
      <button className='Header_button_TPE' onClick={() => setOpcionSeleccionada('opcionDos')}>Te Propongo Esto</button>
      </div>
      </header>
      {mostrarPagina()}
       
   
    </div>
  );
}

export default App;
