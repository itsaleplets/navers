import propTypes from 'prop-types'
import NaversContext from './NaversContext';

function NaversProvider({ children }) {
  return (
    <NaversContext.Provider value={{}}>
      {children}
    </NaversContext.Provider>
  )
}

NaversProvider.propTypes = {
  children: propTypes.func.isRequired,
};

export default NaversProvider;