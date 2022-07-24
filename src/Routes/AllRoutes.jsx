import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import UserPage from './UserPage';
import Login from './Login';
import PrivateRoute from '../Component/PrivateRoute';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/User"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/User/:user_id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
