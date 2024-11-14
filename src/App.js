
import './App.css';
import Contador from './Contador';
import Formulario from './Formulario';
import Toggle from './Toggle';
import { useState } from 'react';
function App() {
  return (
    <div className="app">
      <h1>Componentes sencillos</h1>
      <h3>Contador</h3>
      <Contador />
      <h3>Formulario</h3>
      <Formulario />
      <h3>Toggle</h3>
      <Toggle />
    </div>
  );
}

export default App;
