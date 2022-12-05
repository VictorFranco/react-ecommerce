import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card ({children, link}) {
  return (
    <Link className = 'card' to = {link}>
      {children}
    </Link>
  );
}

export default Card;
