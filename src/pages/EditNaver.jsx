import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editNaver } from '../services/api';
import NaversContext from '../context/NaversContext';
import ModalFeedback from '../components/ModalFeedback';
import NaverForm from '../components/NaverForm';
import Header from '../components/Header';
import '../styles/AddNaver.css';

function AddNaver() {
  const { handleModal } = useContext(NaversContext);
  const [created, setCreated] = useState(false);
  const [token, setToken] = useState(false);
  const location = useLocation();
  const { id, source } = location.state;

  const feedback = {
    state: setCreated,
    title: 'Naver editado',
    msg: 'Naver editado com sucesso!'
  };

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    setToken(getToken);
    source && handleModal();
  },[]);
  
  const editNaverFunc = async (values) => {
    const response = await editNaver(token, values, id);
    console.log(response)
    if(response) {
      setCreated(true);
      handleModal();
    };
  };
  
  const form = {
    title: 'Editar Naver',
    apiFunction: editNaverFunc,
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
