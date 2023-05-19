import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import './App.css';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route pathe='/' element={<HomePage />}/>
        <Route path='/register' element = { <Register />} />
        <Route path='/login' element = { <Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
