import React from 'react';
import './Captura.css';
import {Link} from 'react-router-dom';

function Captura () {
  return (
    <div className='captura'>
      <form className='captura'>
        <label>Nombre:</label><input type='text'/>
        <label>Descripción:</label><input type='text'/>
        <label>Precio:</label><input type='number'/>
        <label>Cantidad:</label><input type='number'/>
        <label>Fotografía:</label><input type='file'/>
        <input type='submit' value="Enviar"/>
      </form>
      <Link to = "/" className='return'> Regresar </Link>
    </div>
  );
}

export default Captura;
