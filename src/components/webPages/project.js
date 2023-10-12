import React, { useState } from 'react';
import './WebPagesCSS/project.css'
import backgroundPokedex from './img_backg/pokedex.PNG'
import backgroundCalc from './img_backg/calculadora.PNG'
import backgroundCamaleon from './img_backg/camaleon.PNG'
import PokedexDetails from '../extras/project_details/product_details_pokedex'
import CalcDetails from '../extras/project_details/product_details_cal'
import ChamaDetails from '../extras/project_details/product_details_chamaleon';


const Project = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const mostrarPagina = () => {
       if (opcionSeleccionada === 'Poke') {
          return <PokedexDetails />;
       } else if (opcionSeleccionada === 'Calc') {
          return <CalcDetails />;
       }
       else if (opcionSeleccionada === 'Chama') {
        return <ChamaDetails />;
     }
       return null;
    };


    return (
        <div className="project_body">
        <div className="body_projects">

                <div onClick={() => setOpcionSeleccionada('Poke')} className="container" ><a href="https://baronioliva.github.io/ejercicio4Pokedex/" target="_blank">
                <h2>Pokedex</h2>
                <div className='fondo' style={{ backgroundImage: `url(${backgroundPokedex})` }}></div>
                
            </a>
            </div>

            <div onClick={() => setOpcionSeleccionada('Calc')} className="container"><a href="https://baronioliva.github.io/ejercicio3Calculdora/" target="_blank">
                <h2>Calculadora</h2>
                <div  className='fondo' style={{ backgroundImage: `url(${backgroundCalc})` }}></div>
                
            </a>
            </div>

            <div onClick={() => setOpcionSeleccionada('Chama')}className="container"><a href="https://baronioliva.github.io/ejercicio2Camaleon/" target="_blank">
                <h2>Fondo Camaleon</h2>
                <div className='fondo' style={{ backgroundImage: `url(${backgroundCamaleon})` }}></div>
                
            </a>         
            </div>
            </div>
            <div className="project_detail">
           {mostrarPagina()}
            </div>
        
        </div>
    )
}

export default Project;