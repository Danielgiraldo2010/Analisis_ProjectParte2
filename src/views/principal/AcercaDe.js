import React from 'react';
import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <h1>Acerca de Grafos</h1>
      <p>
        La aplicación <strong>Grafos</strong> es una herramienta diseñada para el estudio y análisis de algoritmos 
        sobre grafos, con un enfoque particular en problemas de optimización.
      </p>
      <p>
        Permite a los usuarios crear, visualizar y manipular grafos de manera intuitiva, tanto de forma manual como aleatoria, 
        con opciones para personalizar características como:
      </p>
      <ul>
        <li>La cantidad de nodos</li>
        <li>La conectividad</li>
        <li>La ponderación</li>
        <li>La dirección de los arcos</li>
      </ul>
      <p>
        Con una interfaz gráfica de usuario robusta, Grafos facilita la experimentación con algoritmos y 
        procesos sobre grafos, ofreciendo una plataforma dinámica para la exploración y 
        comprensión de este fascinante campo de estudio.
      </p>
    </div>
  );
}

export { AcercaDe };
