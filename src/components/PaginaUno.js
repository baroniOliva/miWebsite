import React, { useState } from 'react';
import AboutMe from './webPages/aboutMe';
import MainWeb from './webPages/mainWeb';
import Project from './webPages/project';
import Diplomas from './webPages/diplomas';
import Contact from './webPages/WebPagesCSS/contact';

import background_perfil from './webPages/img_backg/logoBO.jpg';
import './uno.css'



function PaginaUno() {
  const [opcionSeleccionadaWeb, setOpcionSeleccionadaWeb] = useState(null);
 
  const mostrarPaginaWeb = () => {  
     
    if (opcionSeleccionadaWeb === null) {
      return <MainWeb/>
    } 
    else if (opcionSeleccionadaWeb === 'AboutMe'){
      return <AboutMe/>
      
    }

    else if (opcionSeleccionadaWeb === 'Project'){
      return <Project/>
      
    }
    else if (opcionSeleccionadaWeb === 'Contact'){
      return <Contact/>
      
    }
    else if (opcionSeleccionadaWeb === 'Diplomas'){
      return <Diplomas/>
      
    }
    return null;
    
  };

  return (
    
    <div className='bodyUno'>
      <div className='barra_izquierda'>
      <ul>
      <li className='barra_izquierda_logo' style={{ backgroundImage: `url(${background_perfil})` }}></li>
       
       <section>
         <li className='barra_izquierda_responsive_btn'><a  href='#' onClick={()=>{setOpcionSeleccionadaWeb(null)}}> Main </a></li>
        <li className='barra_izquierda_responsive_btn'><a href='#' onClick={()=>{setOpcionSeleccionadaWeb('AboutMe')}}> Acerca de Mi </a></li>
        <li className='barra_izquierda_responsive_btn'><a href='#' onClick={()=>{setOpcionSeleccionadaWeb('Diplomas')}}>Mis Diplomas</a></li>
        <li className='barra_izquierda_responsive_btn'><a href='#' onClick={()=>{setOpcionSeleccionadaWeb('Project')}}>Proyectos Realizados</a></li>
        <li className='barra_izquierda_responsive_btn'><a href='#' onClick={()=>{setOpcionSeleccionadaWeb('Contact')}}>Contacto</a></li>
        </section>
      </ul>
     </div>
     
      {mostrarPaginaWeb()} 
        
      
    </div>
    
  );
}


export default PaginaUno;
