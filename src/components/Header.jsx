import '../styles/Home.css';
import logo from '../images/logo.png';

function Header() {

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
      <div className="top">
          <img src={logo} alt="nave.rs black rocket" />
        <button
         type="button"
          className="logoutBtn"
          onClick={logout}
        >
          Sair
        </button>
      </div>
  );
}

export default Header;
