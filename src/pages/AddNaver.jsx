import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import { createNaver } from '../services/api';
import ModalFeedback from '../components/ModalFeedback';
import NaverForm from '../components/NaverForm';
import '../styles/AddNaver.css';
import Header from '../components/Header';
import NaversContext from '../context/NaversContext';

function AddNaver() {
  const history = useHistory();
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
