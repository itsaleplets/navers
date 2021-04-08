import '../styles/ModalFeedback.css';
import { MdClose } from "react-icons/md";
import '../styles/DeleteModal.css';
import { useContext } from 'react';
import NaversContext from '../context/NaversContext';

function NaverCard({ feedback }) {
  const { handleModal, updateCards, setUpdateCards } = useContext(NaversContext);
  const { title, msg, state } = feedback;
  const handleClick = () => {
    handleModal();
    state(false);
    setUpdateCards(!updateCards);
  }
  
  return (
      <div className='modalFeedback'>
        <h1>{title}</h1>
        <MdClose onClick={handleClick} size={20} className="closeFeedback" />
        <p>{msg}</p>
      </div> 
  );
}

export default NaverCard;
