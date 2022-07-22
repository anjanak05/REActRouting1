const { createContext, useState } = require('react');

export const AppContextAuth = createContext();

export const AppContextAuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: null
  });

   const handleLogin = ({token}) => {
    setState({ ...state, isAuth: true, token: token });
  };
  const handleLogout = () => {
    setState({ ...state, isAuth: false, token: null });
  };
  return <AppContextAuth.Provider value={{handleLogin, handleLogout, state}}>{children}</AppContextAuth.Provider>;
};


