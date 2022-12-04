import React from 'react'
import './Card.css';

function Card ({children}) {
  return (
    <button className='card'>
      {children}
    </button>
  );
}

export default Card;
