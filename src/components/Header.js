import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header ({children}) {
  return (
    <div className='header'>
      <Link to="/">{children}</Link>
    </div>
  );
}

export default Header;
