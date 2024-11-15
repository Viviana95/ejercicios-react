import { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className='comp1'>
      <p># {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}
