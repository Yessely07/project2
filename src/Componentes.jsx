import React from 'react';

// Componente1: Componente que muestra un div con un color de fondo
const Componente1 = ({ color, changeColor }) => {
  return (
    <div style={{
      backgroundColor: color, // Establece el color de fondo basado en la prop
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button onClick={changeColor}>Cambiar Color</button> {/* Botón para cambiar el color de fondo */}
    </div>
  );
};

// Componente2: Componente que renderiza Componente1 con el color pasado como prop
const Componente2 = ({ color, changeColor }) => {
  return <Componente1 color={color} changeColor={changeColor} />; // Renderiza Componente1 con el color pasado como prop
};

// Componente3: Componente similar a Componente1 pero con imagen de fondo y color inicial 'lightblue'
const Componente3 = ({ color, changeColor }) => {
  return (
    <div style={{
      backgroundColor: color, // Establece el color de fondo basado en la prop
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(/your-photo.png)`, // Imagen de fondo
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
      <button onClick={changeColor}>Cambiar Color</button> {/* Botón para cambiar el color de fondo */}
    </div>
  );
};

// Exporta los componentes para poder ser utilizados en otros archivos
export { Componente1, Componente2, Componente3 };

