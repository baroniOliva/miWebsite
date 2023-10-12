import React, { useState } from 'react';
import background_perfil from './img_backg/foto_perfil.JPG'
import './WebPagesCSS/aboutMe.css';
import MiIconoEnvelope from './icons/envelop_icon';
import MiIconoLink from './icons/linkedin_icon';
import ContactoEmail from '../extras/contact/contact_email';
import ContactoLinkedin from '../extras/contact/contact_linkedin';


const AboutMe = () => {
   const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

   const mostrarPagina = () => {
      if (opcionSeleccionada === 'opcionUno') {
         return <ContactoEmail />;
      } else if (opcionSeleccionada === 'opcionDos') {
         return <ContactoLinkedin />;
      }
      return null;
   };


   return (

      <div className="body">
         <div className="body_picture" style={{ backgroundImage: `url(${background_perfil})` }}></div>
         <div className='body_text'>
            <h2>Me llamo Baroni Oliva</h2>
            <h3>Diseñador Web Front-End</h3>
            <p>Soy un diseñador Web Front-End, enfocado en crear código Limpio y amigable para el usuario. Soy trilingue, hablo Español, Inglés y Francés. Tengo conocimiento en Lean- Six Sigma. Disponible para trabajar y compartir con Ustéd mi experiencia y conocimiento.</p>
            
            {mostrarPagina()}
         </div>
         <div className='body_link'>
            <ul>

               <li onClick={() => setOpcionSeleccionada('opcionUno')}>
                  <p>correo</p>
                  <MiIconoEnvelope />
               </li>
               <li onClick={() => setOpcionSeleccionada('opcionDos')}>
                  <p>Linkedin</p>
                  <MiIconoLink />
               </li>
            </ul>
         </div>


      </div>

   )
};
export default AboutMe;