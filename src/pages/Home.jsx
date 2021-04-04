import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import '../styles/Home.css';
import logo from '../images/logo.png';
import naver from '../images/naver.png';

function Home() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      history.push('/login')
    }
  });

  const addNaver = () => {
    history.push('/adicionar')
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload()
  };

  return (
    <section className="body">
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
      <div className="top">
        <h1>Navers</h1>
        <button
          className="addNaver"
          onClick={addNaver}
        >
          Adicionar Naver
        </button>
      </div>
      <section className="navers">
        <div className="naver">
          <img src={naver} alt=""/>
          <span>Nome</span>
          <p>Profissão</p>
          <ImBin2 className="icon" />
          <MdEdit className="icon" size={18} />
        </div>
        <div className="naver">
          <img src={naver} alt=""/>
          <span>Nome</span>
          <p>Profissão</p>
          <ImBin2 className="icon" />
          <MdEdit className="icon" size={18} />
        </div>
        <div className="naver">
          <img src={naver} alt=""/>
          <span>Nome</span>
          <p>Profissão</p>
          <ImBin2 className="icon" />
          <MdEdit className="icon" size={18} />
        </div>
        <div className="naver">
          <img src={naver} alt=""/>
          <span>Nome</span>
          <p>Profissão</p>
          <ImBin2 className="icon" />
          <MdEdit className="icon" size={18} />
        </div>
      </section>
    </section>
  );
}

export default Home;
