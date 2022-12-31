import React, {useState} from 'react'
import './Compra.css'
import {Link} from 'react-router-dom'
import Product from './Product.js'
import Modal from './Modal.js'
import {ProductContextProvider} from '../context/ProductContext.js'

function Compra() {
  const [products, setProducts] = useState([])

  const ConsultaArticulos = e => {
    e.preventDefault()

    const keyword = { keyword : e.target.nombre.value }

    fetch('http://172.177.11.192:8080/Ecommerce/rest/ws/consulta_articulos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(keyword)
    })
    .then(response => response.json())
    .then(products => setProducts(products))
    .catch(error => alert(error))
  }

  return (
    <ProductContextProvider>
      <div className='body compra'>
        <div className='search-bar'>
          <Link to="/" className="button return"> Regresar </Link>
          <form onSubmit={ConsultaArticulos}>
            <input name="nombre" type="text" placeholder="Ingresa el producto a buscar"/>
            <input type="submit" className="button" value="Buscar"/>
          </form>
          <Link to="/Carrito" className="button"> Carrito de compra </Link>
        </div>
        <div className='products'>
          { products.map(product => <Product key={product.id} info={product} />) }
        </div>
        <Modal />
      </div>
    </ProductContextProvider>
  );
}

export default Compra;
