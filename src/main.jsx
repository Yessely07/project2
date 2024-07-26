

// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Componente1, Componente2, Componente3 } from './Componentes.jsx';
import './index.css';

const Main = () => {
  const [color1, setColor1] = useState('#3498db'); // Color inicial para Componente1
  const [color2, setColor2] = useState('#2ecc71'); // Color inicial para Componente2
  const [color3, setColor3] = useState('#87CEEB'); // Color inicial para Componente3 (celeste)

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleChangeColor = () => {
    setColor1(getRandomColor());
    setColor2(getRandomColor());
    setColor3(getRandomColor());
  };

  return (
    <div>
      <Componente1 color={color1} changeColor={handleChangeColor} />
      <Componente2 color={color2} changeColor={handleChangeColor} />
      <Componente3 color={color3} changeColor={handleChangeColor} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
