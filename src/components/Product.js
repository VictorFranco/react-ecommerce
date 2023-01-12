import React, {useState, useContext} from 'react'
import './Product.css'
import ProductContext from '../context/ProductContext.js'

const AgregarACarrito = (nombre, cantidad) => {
  const data = {nombre,cantidad}
  fetch('https://t10-2020630109.azurewebsites.net/api/agrega_a_carrito', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(data => {
    if (data.status === 200) alert("OK")
    else data.json().then(e => JSON.parse(e)).then(({message}) => alert(message))
  })
}

function Product({info}) {
  const {nombre,precio,fotografia} = info;
  const foto = `data:image/jpeg;base64,${fotografia}`
  const [counter, setCounter] = useState(1);
  const change_number = e => setCounter(e.target.value)
  const context = useContext(ProductContext)

  const OnSubmit = e => {
    e.preventDefault()
    let name = e.nativeEvent.submitter.value
    let cantidad = e.target.cantidad.value
    switch (name) {
      case "Comprar":
        AgregarACarrito(nombre,cantidad)
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
      <img alt={nombre} src={foto} />
      <form className='info' onSubmit={OnSubmit} >
        <div>{nombre}</div>
        <div>${precio}</div>
        <input type="number" name="cantidad" min="1" value={counter} onChange={change_number} />
        <input type="submit" value="Comprar" />
        <input type="submit" value="Detalle" />
      </form>
    </div>
  );
}

export default Product;
