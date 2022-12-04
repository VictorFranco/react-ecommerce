import React from 'react';
import Card from './Card.js';
import './Menu.css';

function Body () {
  return (
    <div className='body'>
      <Card link = "/Captura">Captura de artículo</Card>
      <Card link = "/Compra">Compra de artículos</Card>
    </div>
  );
}

export default Body;
