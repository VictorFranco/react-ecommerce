import React, {useState, useContext} from 'react'
import './Product.css'
import ProductContext from '../context/ProductContext.js'

function Product({info}) {
  const {nombre,precio,cantidad,fotografia} = info;
  const [counter, setCounter] = useState(1);
  const change_number = e => setCounter(e.target.value)
  const context = useContext(ProductContext)
  const OnSubmit = e => {
    e.preventDefault()
    let name = e.nativeEvent.submitter.value
    switch (name) {
      case "Comprar":
        break;
      case "Detalle":
        const {setProduct} = context
        setProduct(info)
        break;
      default: break;
    }
  }

  return (
    <div className='product'>
      <img alt={nombre} src={fotografia} />
      <form className='info' onSubmit={OnSubmit} >
        <div>{nombre}</div>
        <div>${precio}</div>
        <input type="number" min="1" max={cantidad} value={counter} onChange={change_number} />
        <input type="submit" value="Comprar" />
        <input type="submit" value="Detalle" />
      </form>
    </div>
  );
}

export default Product;
