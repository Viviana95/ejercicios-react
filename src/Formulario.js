import { useState } from 'react';

export default function Formulario() {
    const [nombre, setNombre] = useState('');

    const handleChange = (e) => {
        setNombre(e.target.value); 
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Bienvenido(a) " + nombre)
      };
      
      
  return (
    <div className='comp2'>    
      <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input type="text" value={nombre} onChange={handleChange}/>
      </label>
      <button type="submit">Enviar</button>
      </form>
    </div>
  )
}