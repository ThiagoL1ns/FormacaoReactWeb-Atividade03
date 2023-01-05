import React from 'react';
import './App.css';
import Login from './telas/login';
import Cadastro from './telas/cadastro';
import Home from './telas/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/cadastro' exact element={<Cadastro />} />
        <Route path='/home' exact element={<Home />} />
      </Routes>
    </Router>   
    
  );
}

export default App;
