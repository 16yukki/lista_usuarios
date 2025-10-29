import React from 'react';
import Usuario from './Usuario';

// La lista de usuarios de ejemplo de tu imagen
const usuarios = [
  {"id": 1, "nombre": "José", "puntaje": 50},
  {"id": 15, "nombre": "María", "puntaje": 20},
  {"id": 14, "nombre": "Juan", "puntaje": 99},
  {"id": 2, "nombre": "Lucía", "puntaje": 33},
  {"id": 3, "nombre": "Carlos", "puntaje": 88},
  {"id": 4, "nombre": "Ana", "puntaje": 43},
  {"id": 5, "nombre": "Pedro", "puntaje": 67},
  {"id": 6, "nombre": "Laura", "puntaje": 71},
  {"id": 7, "nombre": "Andrés", "puntaje": 53},
  {"id": 8, "nombre": "Camila", "puntaje": 46},
  {"id": 9, "nombre": "Felipe", "puntaje": 88},
  {"id": 10, "nombre": "Valentina", "puntaje": 77},
  {"id": 11, "nombre": "Mateo", "puntaje": 64},
  {"id": 12, "nombre": "Isabella", "puntaje": 58},
  {"id": 13, "nombre": "Sofía", "puntaje": 82},
  {"id": 16, "nombre": "Diego", "puntaje": 47},
  {"id": 17, "nombre": "Manuela", "puntaje": 39},
  {"id": 18, "nombre": "Daniel", "puntaje": 30}
];

function Grilla() {
  return (
    <div className="grilla-container">
      {/* Mapeamos la lista de usuarios.
        Por cada "usuario", creamos un componente <Usuario />
      */}
      {usuarios.map(usuario => (
        <Usuario
          key={usuario.id} // "key" es necesaria para React en las listas
          nombre={usuario.nombre}
          puntaje={usuario.puntaje}
        />
      ))}
    </div>
  );
}

export default Grilla;