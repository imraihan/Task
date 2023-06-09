import React from 'react';
import Index from './routes/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Navbar from './layout/Navbar';
import Profile from './pages/Profile';
import TaskList from './pages/TaskList';
import PageNotFound from './layout/PageNotFound';
// import Logout from './pages/Logout';

function App() {
  return (
    <div className="">
      {/* <Index /> */}
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
    </div>
  );
}

export default App;