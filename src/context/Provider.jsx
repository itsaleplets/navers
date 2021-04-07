import propTypes from 'prop-types'
import { useState } from 'react';
import NaversContext from './NaversContext';

function NaversProvider({ children }) {
  const [opacity, setOpacity] = useState(false);
  const [modal, setModal] = useState(false);

  const handleOpacity = () => {
    setOpacity(!opacity);
  };

  const handleModal = () => {
    handleOpacity()
    if(!modal) {
      document.body.style.background = 'rgb(0, 0, 0, 0.5)';
      // document.oninput.style.background = 'black';
      
      return setModal(!modal);
    };
    document.body.style.background = 'none';
    // document.input.style.background = 'none';
    setModal(!modal);
  };

  const values = {
    handleOpacity,
    handleModal,
    modal,
    opacity,
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