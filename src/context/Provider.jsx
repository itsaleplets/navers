import { useState } from 'react';
import propTypes from 'prop-types'
import NaversContext from './NaversContext';

function NaversProvider({ children }) {
  const [opacity, setOpacity] = useState(false);
  const [modal, setModal] = useState(false);
  const [updateCards, setUpdateCards] = useState(true);

  const handleOpacity = () => {
    setOpacity(!opacity);
  };

  const handleModal = () => {
    handleOpacity();
    if(!modal) {
      document.body.style.background = 'rgb(0, 0, 0, 0.5)';
      setModal(!modal);
    } else {
      document.body.style.background = 'none';
      setModal(!modal);
    };
  };

  const values = {
    handleOpacity,
    handleModal,
    modal,
    opacity,
    updateCards,
    setUpdateCards,
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
