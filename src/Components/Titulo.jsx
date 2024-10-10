import React from 'react';
import './Titulo.css'; 

const Titulo = ({ texto }) => {
  return (
    <header className="titulo-container">
      <h1 className="titulo-texto">{texto}</h1>
    </header>
  );
};

export default Titulo;