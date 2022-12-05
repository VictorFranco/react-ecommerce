import React from 'react'
import './Compra.css'
import {Link} from 'react-router-dom'

function Compra () {
  return (
    <div className='body compra'>
      <div className='search-bar'>
        <form>
          <label>Nombre del producto:</label>
          <input type="text"/>
          <input type="submit" className="button" value="Buscar"/>
        </form>
        <Link to="/" className="button return"> Regresar </Link>
      </div>
    </div>
  );
}

export default Compra;
