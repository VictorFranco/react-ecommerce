import React, {useContext} from 'react'
import './Modal.css'
import ProductContext from '../context/ProductContext.js'

function Modal() {
  const context = useContext(ProductContext)
  if (!context || Object.keys(context.product).length === 0)
    return <></>;
  const CloseModal = () => {
    context.setProduct({})
  }
  const {nombre,descripcion,fotografia} = context.product
  const foto = `data:image/jpeg;base64,${fotografia}`

  return (
    <div className='modal'>
      <div>
        <input className='close' type="submit" value="x" onClick={CloseModal}/>
        <img alt={nombre} src={foto} />
        <div className='info'>
          <div className='name'>{nombre}</div>
          <div><strong>Descripción:</strong><br/>{descripcion}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
