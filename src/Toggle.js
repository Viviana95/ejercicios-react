import { useState } from 'react';

export default function Toggle() {
    const [mostrar, setMostrar] = useState(true);
    return (
        <div className='comp3'>
        <button onClick={() => setMostrar(!mostrar)}>
          {}
          {mostrar? `Ocultar` : `Mostrar`}
        </button>
        <div className={mostrar? "show-element" : null}>
          {mostrar && <h4>Mensaje mostrado correctamente</h4>}
        </div>
    </div>
    );
  }