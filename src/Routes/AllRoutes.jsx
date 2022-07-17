import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import UserPage from "./UserPage"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/User/:user_id" element={<UserPage/>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
