import React, { useEffect, useState } from 'react'

const AuthContent = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
})

export const AuthContentProvider = (props) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  useEffect(() => {
    const storedInformation = localStorage.getItem('isLoggedIn');

    if (storedInformation === '1') {
      setIsloggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsloggedIn(false)
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsloggedIn(true)
  }

  return <AuthContent.Provider 
            value={{
              isLoggedIn: isLoggedIn, 
              onLogout: logoutHandler, 
              onLogin: loginHandler
            }}
            >
              {props.children}</AuthContent.Provider>;
}

export default AuthContent