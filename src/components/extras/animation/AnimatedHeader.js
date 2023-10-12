import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './AnimatedHeader.css';

const AnimatedHeader = ({ show }) => {
  return (
    <CSSTransition
      in={show}
      timeout={1000} // Duración de la animación en milisegundos
      classNames="slide-in" // Nombre de la clase CSS para la animación
      unmountOnExit
    >
      <div className="animated-header">
        <h1>Proyectos</h1>
      </div>
    </CSSTransition>
  );
};

export default AnimatedHeader;