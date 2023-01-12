import React from 'react'
import './ProductCart.css'

function Product({info, context}) {
  const {id,nombre,precio,cantidad,fotografia} = info;
  const foto = `data:image/jpeg;base64,${fotografia}`

  const BorrarDeCarrito = () => {
    const result = window.confirm(`¿Estás seguro de eliminar ${cantidad} unidades de "${nombre}" con del carrito de compra?`)
    if (!result) return;
    const {products, setProducts} = context
    const data = {id}

    fetch('https://t10-2020630109.azurewebsites.net/api/borrar_de_carrito', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(() => setProducts(products))
    .catch(() => alert("Error"))
  }

  return (
    <div className='product-cart'>
      <img alt={nombre} src={foto} />
      <div className='info'>
        <div>{nombre}</div>
        <div>${precio}</div>
        <div>Cantidad: {cantidad}</div>
      </div>
      <button onClick={BorrarDeCarrito}>X</button>
    </div>
  );
}

export default Product;
