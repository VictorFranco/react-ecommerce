import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header.js'
import './components/Body.css'
import Menu from './components/Menu.js'
import Captura from './components/Captura.js'
import Compra from './components/Compra.js'
import Carrito from './components/Carrito.js'

function App() {
  return (
    <div className="App">
      <Header>E-Commerce</Header>
      <Routes>
        <Route path='/' element={<Menu />}/>
        <Route path='/Captura' element={<Captura />}/>
        <Route path='/Compra' element={<Compra />}/>
        <Route path='/Carrito' element={<Carrito />}/>
      </Routes>
    </div>
  );
}

export default App;
