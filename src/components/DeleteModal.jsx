import { useEffect, useState } from 'react';
import '../styles/DeleteModal.css';

function DeleteModal({id, setDeleteModal, handleModal, getApiDelete }) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    setToken(getToken)
  }, [])

  const cancel = () => {
    handleModal();
    setDeleteModal(false)
  }

  return (
    <div className='deleteModal'>
        <h1>Excluir Naver</h1>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <button onClick={cancel}>Cancelar</button>
        <button onClick={() => getApiDelete(token, id)}>Excluir</button>
    </div>
  );
}

export default DeleteModal;
