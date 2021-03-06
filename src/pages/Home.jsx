import {  useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { showNavers } from '../services/api';
import NaversContext from '../context/NaversContext';
import NaverCard from '../components/NaverCard';
import Header from '../components/Header';
import '../styles/Home.css';

function Home() {
  const history = useHistory();
  const { opacity, updateCards } = useContext(NaversContext);
  const [navers, setNavers] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      history.push('/login')
    }
    getNavers(token);
  }, [updateCards, history]);

  const getNavers = async (token) => {
    const data = await showNavers(token);
    setNavers(data);
  };

  const addNaver = () => {
    history.push('/adicionar');
  };

  return (
    <section className="body home">
      <Header />
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
        {navers ? navers.map((naver) => (
          <NaverCard
            key={naver.id}
            naver={naver}
          />
        )) : <h1>Loading...</h1>}
      </section>
    </section>
  );
}

export default Home;
