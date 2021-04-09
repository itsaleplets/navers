import { useContext, useEffect, useState } from 'react';
import { createNaver } from '../services/api';
import NaversContext from '../context/NaversContext';
import ModalFeedback from '../components/ModalFeedback';
import NaverForm from '../components/NaverForm';
import Header from '../components/Header';
import '../styles/AddNaver.css';

function AddNaver() {
  const { handleModal } = useContext(NaversContext);
  const [created, setCreated] = useState(false);
  const [token, setToken] = useState(false);

  const feedback = {
    state: setCreated,
    title: 'Naver criado',
    msg: 'Naver criado com sucesso!'
  };
  
  useEffect(() => {
    const getToken = localStorage.getItem('token');
    setToken(getToken)
  }, []);
  
  const Create = async (values) => {
    const response = await createNaver(token, values);
    if(response) {
      setCreated(true);
      handleModal();
    };
  };
  
  const form = {
    title: 'Adicionar Naver',
    apiFunction: Create,
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
