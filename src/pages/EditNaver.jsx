import { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { createNaver } from '../services/api';
import ModalFeedback from '../components/ModalFeedback';
import NaverForm from '../components/NaverForm';
import '../styles/AddNaver.css';
import Header from '../components/Header';
import NaversContext from '../context/NaversContext';

function AddNaver() {
  const { handleModal } = useContext(NaversContext);
  const [created, setCreated] = useState(false);
  const [token, setToken] = useState(false);
  const location = useLocation();

  const feedback = {
    state: setCreated,
    title: 'Naver editado',
    msg: 'Naver editado com sucesso!'
  };

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    setToken(getToken);
  }, []);
  
  const editNaver = async (values) => {
    const { id } = location.state;
    const response = await createNaver(token, values, id);
    if(response) {
      setCreated(true);
      handleModal();
    };
  };
  
  const form = {
    title: 'Editar Naver',
    apiFunction: editNaver,
    state: created
  };
  
  return (
    <section className="body home">
      <Header />
      {created && <ModalFeedback feedback={feedback}/> }
      <NaverForm form={form} />
    </section>
  );
}

export default AddNaver;
