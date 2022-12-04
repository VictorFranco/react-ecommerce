import React from 'react';
import Card from './Card.js';
import './Body.css';

function Body () {
  return (
    <div className='body'>
      <Card>Captura de artículo</Card>
      <Card>Compra de artículos</Card>
    </div>
  );
}

export default Body;
