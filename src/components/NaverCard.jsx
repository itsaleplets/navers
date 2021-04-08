import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { deleteNaver }from '../services/api';
import DeleteModal from './DeleteModal';
import NaverDetails from './NaverDetails';
import ModalFeedback from './ModalFeedback';
import '../styles/NaverCard.css';
import '../styles/DeleteModal.css';
import NaversContext from '../context/NaversContext';

function NaverCard({ naver }) {
  const history = useHistory();
  const { handleModal } = useContext(NaversContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedFeedback, setDeletedFeedback] = useState(false);
  const [details, setDetails] = useState(false);
  
  const feedback = {
    state: setDeletedFeedback,
    title: 'Naver excluído',
    msg: 'Naver excluído com sucesso"'
  }

  const deleteNaverModal = async () => {
    setDeleteModal(true);
    handleModal();
  };

  const getApiDelete = async (token, id) => {
    const data = await deleteNaver(token, id);
    setDeletedFeedback(data.deleted);
    if(data.deleted) {
      setDeleteModal(false);
      setDeletedFeedback(true);
    };
  };

  const showDetails = () => {
    setDetails(!details);
    handleModal();
  };

  return (
    <section className="navCard">
      {deletedFeedback && 
      <ModalFeedback feedback={feedback} />
      }
      {deleteModal && 
       <DeleteModal
        id={naver.id}
        getApiDelete={getApiDelete}
        setDeleteModal={setDeleteModal}
        deletedFeedback={deletedFeedback}
      />
      }
      <div
        key={naver.id}
        className="naver"
      >
        <img onClick={showDetails} src={naver.url} alt=""/>
        <span>{naver.name}</span>
        <p>{naver.job_role}</p>
        <ImBin2 onClick={deleteNaverModal} className="icon" />
        <MdEdit onClick={() => history.push('/editar', {id: naver.id})} className="icon" size={18} />
        {details && <NaverDetails naver={naver} showDetails={showDetails}/>}
      </div>
    </section>
  );
}

export default NaverCard;
