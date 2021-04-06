import '../styles/ModalFeedback.css';
import { MdClose } from "react-icons/md";
import '../styles/DeleteModal.css';

function NaverCard({ handleModal, setDeletedFeedback  }) {

  const handleClick = () => {
    handleModal();
    setDeletedFeedback(false);
  }
  return (
      <div className='modalFeedback'>
        <h1>Naver excluído</h1>
        <MdClose onClick={handleClick} size={20} className="closeFeedback" />
        <p>Naver excluído com sucesso!</p>
      </div> 
  );
}

export default NaverCard;
