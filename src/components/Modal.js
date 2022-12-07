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
  return (
    <div className='modal'>
      <div>
        <input className='close' type="submit" value="x" onClick={CloseModal}/>
        <img alt={nombre} src={fotografia} />
        <div className='info'>
          <div className='name'>{nombre}</div>
          <div><strong>Descripción:</strong><br/>{descripcion}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
