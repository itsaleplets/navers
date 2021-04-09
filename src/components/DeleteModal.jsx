import { useContext, useEffect, useState } from 'react';
import NaversContext from '../context/NaversContext';
import propTypes from 'prop-types'
import '../styles/DeleteModal.css';

function DeleteModal({ id, setDeleteModal, getApiDelete }) {
  const [token, setToken] = useState('');
  const { handleModal } = useContext(NaversContext);
  
  useEffect(() => {
    const getToken = localStorage.getItem('token');
    setToken(getToken)
  }, [])

  const cancel = () => {
    handleModal();
    setDeleteModal(false);
  }

  return (
    <div className='deleteModal'>
        <h1>Excluir Naver</h1>
        <p>Tem certeza que deseja excluir este Naver?</p>
        <div>
          <button onClick={cancel}>Cancelar</button>
          <button onClick={() => getApiDelete(token, id)}>Excluir</button>
        </div>
    </div>
  );
}

DeleteModal.propTypes = {
  id: propTypes.string.isRequired,
  setDeleteModal: propTypes.string.isRequired,
  getApiDelete: propTypes.func.isRequired,
};

export default DeleteModal;
