import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPencil } from '@fortawesome/free-solid-svg-icons';
import './WebPagesCSS/project.css'
import backgroundPokedex from './img_backg/pokedex.PNG'
import backgroundCalc from './img_backg/calculadora.PNG'
import backgroundCamaleon from './img_backg/camaleon.PNG'
import PokedexDetails from '../extras/project_details/product_details_pokedex'
import CalcDetails from '../extras/project_details/product_details_cal'
import ChamaDetails from '../extras/project_details/product_details_chamaleon';
library.add(faLink, faPencil);



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

            
                <div  className="container" >
                <h2>Pokedex</h2>
                <div className='fondo' style={{ backgroundImage: `url(${backgroundPokedex})` }}></div>
                
                <div className="link-button"><a href="https://baronioliva.github.io/ejercicio4Pokedex/" target="_blank"> <p>link</p><FontAwesomeIcon icon="fa-solid fa-link" /> </a></div>
                <div className="link-button" onClick={() => setOpcionSeleccionada('Poke')} ><p>descripcion</p> <FontAwesomeIcon icon="fa-solid fa-pencil" /> </div>
            </div>

            <div  className="container ">
                <h2>Calculadora</h2>
                <div  className='fondo' style={{ backgroundImage: `url(${backgroundCalc})` }}></div>
                
                <div className="link-button"><a href="https://baronioliva.github.io/ejercicio3Calculdora/" target="_blank"><p>link</p><FontAwesomeIcon icon="fa-solid fa-link" /> </a></div>
                <div className="link-button" onClick={() => setOpcionSeleccionada('Calc')} > <p>descripcion</p> <FontAwesomeIcon icon="fa-solid fa-pencil" /> </div>
            </div>

            <div className="container">
                <h2>Camaleon</h2>
                <div className='fondo' style={{ backgroundImage: `url(${backgroundCamaleon})` }}></div>
                
                <div className="link-button"><a href="https://baronioliva.github.io/ejercicio2Camaleon/" target="_blank"><p>link</p><FontAwesomeIcon icon="fa-solid fa-link" /> </a></div>
                <div className="link-button" onClick={() => setOpcionSeleccionada('Chama')} > <p>descripcion</p> <FontAwesomeIcon icon="fa-solid fa-pencil" />  </div>        
            </div>
            </div>
            <div className="project_detail">
           {mostrarPagina()}
            </div>
        
        </div>
    )
}

export default Project;