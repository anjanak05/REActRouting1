import React, { useState, form, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContextAuth } from '../Context/AuthContext';
import { handleLogin, handleLogout } from '../Context/AuthContext';

const Login = () => {
  const auth = useContext(AppContextAuth);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(res => {
        alert('success');
        // console.log(res);

        auth.handleLogin(res.token);
        navigate("/User")
      })
      .catch(error => {});
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          placeholder="enter email"
        />
      </div>
      <div>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
          placeholder="enter password"
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default Login;
