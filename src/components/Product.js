import React, {useState} from 'react'
import './Product.css'

function Product({info}) {
  const {nombre,precio,descripcion,cantidad,fotografia} = info;
  const [counter, setCounter] = useState(1);
  return (
    <div className='product'>
      <img alt={descripcion} src={fotografia}/>
      <form className='info'>
        <div>{nombre}</div>
        <div>${precio}</div>
        <input type="number" min="1" max={cantidad} value={counter} onChange={e=>setCounter(e.target.value)}/>
        <input type="submit" value="Comprar" />
      </form>
    </div>
  );
}

export default Product;
