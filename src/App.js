import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Menu from './components/Menu.js';

function App() {
  return (
    <div className="App">
      <Header>E-Commerce</Header>
      <Routes>
        <Route path='/' element={<Menu />}/>
      </Routes>
    </div>
  );
}

export default App;
