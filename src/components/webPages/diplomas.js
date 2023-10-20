import './WebPagesCSS/diplomas.css';
import React, { useState } from 'react';

const Diplomas = () => {

  const initialDiplomas = [
    {
      isActive: false,
      content: "Diploma de Git & Github",
    },
    {
      isActive: false,
      content: "Diploma de JS primeros pasos",
    },
    {
      isActive: false,
      content: "Diploma de JS manipulacion DOM",
    },
    {
      isActive: false,
      content: "Diploma de HTML5 & CSS3",
    },
    {
      isActive: false,
      content: "Diploma de React Router",
    },
    {
      isActive: false,
      content: "Diploma de Habitos ser productivo",
    },
  ];
  
  const [diplomas, setDiplomas] = useState(initialDiplomas);

  const toggleActive = (index) => {
    const updatedDiplomas = [...diplomas];
    updatedDiplomas[index].isActive = !updatedDiplomas[index].isActive;
    setDiplomas(updatedDiplomas);
  };

  return (
    <div className="container_diplomas">
      {diplomas.map((diploma, index) => (
        <div
          key={index}
          className={`diplomas ${diploma.isActive ? 'active' : ''}`}
          onClick={() => toggleActive(index)}
        >
          <div className={`diploma${index + 1} diplomaStyle`}></div>
          <p>{diploma.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Diplomas;


