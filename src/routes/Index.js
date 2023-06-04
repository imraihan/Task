import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../layout/Navbar';
import Register from '../pages/Register';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import TaskList from '../pages/TaskList';
import Profile from '../pages/Profile';
import PageNotFound from '../layout/PageNotFound';


const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasklist" element={<TaskList/>} />
          <Route path="*" element={ <PageNotFound />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default Index