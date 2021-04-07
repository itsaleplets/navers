import {  useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Home.css';
import { showNavers } from '../services/api';
import NaverCard from '../components/NaverCard';
import Header from '../components/Header';
import NaversContext from '../context/NaversContext';

function Home() {
  const history = useHistory();
  const { handleOpacity, opacity } = useContext(NaversContext);
  // const [opacity, setOpacity] = useState(false);
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
    setNavers(data);
  };

  const addNaver = () => {
    history.push('/adicionar');
  };

  // const handleOpacity = () => {
  //   setOpacity(!opacity);
  // };

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
            // handleOpacity={handleOpacity}
          />
        )) : <h1>Loading...</h1>}
      </section>
    </section>
  );
}

export default Home;
