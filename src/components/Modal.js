import React, {useContext} from 'react'
import './Modal.css'
import Context from '../context/StaticContext.js'

function Modal() {
  const context = useContext(Context)
  if (!context || Object.keys(context.product).length === 0)
    return <></>;

  const {nombre,descripcion,fotografia} = context.product
  return (
    <div className='modal'>
      <div>
        <img alt={nombre} src={fotografia} />
        <div className='info'>
          <div className='name'>{nombre}</div>
          <div>Descripción:<br/>{descripcion}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
