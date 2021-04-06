import { useState } from 'react';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import '../styles/NaverCard.css';
import DeleteModal from './DeleteModal';
import NaverDetails from './NaverDetails';
import { deleteNaver }from '../services/api';
import ModalFeedback from './ModalFeedback';
import '../styles/DeleteModal.css';

function NaverCard({ naver, handleOpacity }) {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedFeedback, setDeletedFeedback] = useState(false);
  const [details, setDetails] = useState(false);

  const deleteNaverModal = async (id) => {
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

  const handleModal = () => {
    handleOpacity()
    if(!modal) {
      document.body.style.background = 'rgb(0, 0, 0, 0.5)';
      return setModal(!modal);
    };
    document.body.style.background = 'none';
    setModal(!modal);
  };

  const showDetails = () => {
    setDetails(!details);
    handleModal();
  };

  return (
    <section className="navCard">
      {deletedFeedback && 
      <ModalFeedback handleModal={handleModal} setDeletedFeedback={setDeletedFeedback} />
      }
      {deleteModal && 
       <DeleteModal
        id={naver.id}
        getApiDelete={getApiDelete}
        setDeleteModal={setDeleteModal}
        handleModal={handleModal}
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
        <MdEdit className="icon" size={18} />
        {details && <NaverDetails naver={naver} showDetails={showDetails}/>}
      </div>
    </section>
  );
}

export default NaverCard;
