import propTypes from 'prop-types'
import { useState } from 'react';
import NaversContext from './NaversContext';

function NaversProvider({ children }) {
  const [token, setToken] = useState('');

  const getToken = (token) => {
    setToken(token);
    // console.log(token);
  };

  const values = {
    getToken,
    token,
  }

  return (
    <NaversContext.Provider value={values}>
      {children}
    </NaversContext.Provider>
  )
}

NaversProvider.propTypes = {
  children: propTypes.object.isRequired,
};

export default NaversProvider;