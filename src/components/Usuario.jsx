import React from 'react';

// Recibimos las props "nombre" y "puntaje" usando destructuring
function Usuario({ nombre, puntaje }) {
  return (
    <div className="usuario-card">
      <h3>{nombre}</h3>
      <p>Puntaje: {puntaje}</p>
    </div>
  );
}

export default Usuario;