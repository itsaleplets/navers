import {  useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../images/logo.png';
import { showNavers } from '../services/api';
import NaverCard from '../components/NaverCard';

function Home() {
  const history = useHistory();
  const [opacity, setOpacity] = useState(false);
  const [navers, setNavers] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      history.push('/login')
    }
    getNavers(token);
  }, [history]);

  const getNavers = async (token) => {
    const data = await showNavers(token);
    console.log(data);
    setNavers(data);
  };

  const addNaver = () => {
    history.push('/adicionar');
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  // const deleteNaver = () => {
  //   console.log('ok')
  // }

  const handleOpacity = () => {
    setOpacity(!opacity);
  };

  return (
    <section className="body home">
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
          className={opacity ? "addNaver btn" : "addNaver"}
          onClick={addNaver}
        >
          Adicionar Naver
        </button>
      </div>
      <section className="navers">
        {navers && navers.map((naver) => (
          <NaverCard
            key={naver.id}
            naver={naver}
            handleOpacity={handleOpacity}
          />
        ))}
      </section>
    </section>
  );
}

export default Home;
