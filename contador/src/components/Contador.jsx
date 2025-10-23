import React, { useState } from 'react'
const Contador = () => {
    const[numero, setNumero] = useState (0);
   // let numero = 1;
    const Sumar = () => {
        numero ++;
        //console.log(numero);
        setNumero(numero + 1);
    }
  return (
    <section>
      <h1>Contador</h1>
    <div className='d-flex align-items-center justify-content-center'>
        <button className='btn btn-primary'onClick={()=>setNumero(numero+1)}> + </button>
        <p className='fs-3 mx-3'>{numero}</p>
        <button className='btn btn-danger'onClick={()=>setNumero(numero-1)}> - </button>
    </div>
    </section>
  )
}

export default Contador
