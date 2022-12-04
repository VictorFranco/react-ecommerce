import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import {Route, Routes} from 'react-router-dom';

const Home = () => <Body />

function App() {
  return (
    <div className="App">
      <Header>E-Commerce</Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
