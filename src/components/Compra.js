import React from 'react'
import './Compra.css'
import {Link} from 'react-router-dom'
import Product from './Product.js'
import Modal from './Modal.js'
import {ProductContextProvider} from '../context/ProductContext.js'

const data = [
  {id:1,nombre:"Coca-Cola",descripcion:"refresco",precio:20,cantidad:5,fotografia:"https://m.media-amazon.com/images/I/91PWew87CCL._AC_SX425_.jpg"},
  {id:2,nombre:"Pan Bimbo",descripcion:"pan blanco",precio:50,cantidad:8,fotografia:"https://tiendasneto.com.mx/media/catalog/product/cache/cb1e6b076f68ee0ac6e5e542f63310fa/1/0/1010000066-1_14.jpg"},
  {id:3,nombre:"Gansito",descripcion:"pan dulce",precio:10,cantidad:9,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100015310L.jpg"},
  {id:4,nombre:"Sabritas",descripcion:"papas",precio:20,cantidad:7,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101113388L.jpg"},
  {id:5,nombre:"Doritos",descripcion:"papas",precio:15,cantidad:20,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101116773L.jpg"},
  {id:6,nombre:"Moto G7",descripcion:"celular",precio:5000,cantidad:40,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/v1602113572/mg/images/categorias/d-celulares/category-destacados.jpg"},
  {id:7,nombre:"iPhone",descripcion:"celular",precio:8000,cantidad:50,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00750622733525l.jpg"},
  {id:8,nombre:"Pepsi",descripcion:"refresco",precio:30,cantidad:40,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103131009L.jpg"},
  {id:9,nombre:"Donas",descripcion:"pan dulce",precio:30,cantidad:40,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103047422L.jpg"},
  {id:10,nombre:"Rockaleta",descripcion:"paleta dulce",precio:10,cantidad:50,fotografia:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101110545L3.jpg"},
];

function Compra() {
  return (
    <ProductContextProvider>
      <div className='body compra'>
        <div className='search-bar'>
          <form>
            <label>Nombre del producto:</label>
            <input type="text"/>
            <input type="submit" className="button" value="Buscar"/>
          </form>
          <Link to="/" className="button return"> Regresar </Link>
        </div>
        <div className='products'>
          { data.map(product => <Product key={product.id} info={product} />) }
        </div>
        <Modal />
      </div>
    </ProductContextProvider>
  );
}

export default Compra;
