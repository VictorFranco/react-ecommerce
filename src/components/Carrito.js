import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ProductCart from './ProductCart.js'
import './Carrito.css'

function Carrito() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://t10-2020630109.azurewebsites.net/api/mostrar_carrito', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(products => setProducts(products))
    .catch(error => alert(error))
  }, [products])

  const EliminarCarrito = () => {
    const result = window.confirm("¿Estás seguro de eliminar el carrito de compra?")
    if (!result) return;
    fetch('https://t10-2020630109.azurewebsites.net/api/borrar_carrito', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then(() => setProducts(products))
    .catch(() => alert("Error"))
  }

  const result = products.reduce((value, {precio, cantidad}) => value + precio * cantidad, 0)

  return (
    <div className='body carrito'>
      <div className='search-bar'>
        <Link to="/Compra" className="button return"> Seguir comprando </Link>
        <button className="button" onClick={EliminarCarrito}>Eliminar carrito de compra</button>
        <div className='total'>Total de compra ${result}</div>
      </div>
      <div className='products'>
        { products.map(product => <ProductCart key={product.id} info={product} context={{products,setProducts}}/>) }
      </div>
    </div>
  );
}

export default Carrito;
