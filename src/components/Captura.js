import React from 'react'
import './Captura.css'
import {Link} from 'react-router-dom'

const AltaArticulo = data => {
  fetch('http://172.177.11.192:8080/Ecommerce/rest/ws/alta_articulo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(({status}) => alert(status == 200 ? "OK" : "Error"))
}

const OnSubmit = e => {
  e.preventDefault()

  let form_data = new FormData(e.target)
  let data = Object.fromEntries(form_data)
  let reader = new FileReader();
  reader.onloadend = () => {
    data.fotografia = reader.result.split(',')[1]
    data = {articulo: data}
    AltaArticulo(data)
  }
  reader.readAsDataURL(data.fotografia);
}

function Captura () {
  return (
    <div className='body captura'>
      <form onSubmit={OnSubmit}>
        <label>Nombre:</label><input name='nombre' type='text'/>
        <label>Descripción:</label><input name='descripcion' type='text'/>
        <label>Precio:</label><input name='precio' type='number'/>
        <label>Cantidad:</label><input name='cantidad' type='number'/>
        <label>Fotografía:</label><input name='fotografia' type='file'/>
        <input type='submit' value="Enviar"/>
      </form>
      <Link to = "/" className='return'> Regresar </Link>
    </div>
  );
}

export default Captura;
