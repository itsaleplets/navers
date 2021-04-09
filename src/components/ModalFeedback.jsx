import { useContext } from 'react';
import NaversContext from '../context/NaversContext';
import { MdClose } from "react-icons/md";
import propTypes from 'prop-types'
import '../styles/ModalFeedback.css';
import '../styles/DeleteModal.css';

function ModalFeedback({ feedback }) {
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

ModalFeedback.propTypes = {
  feedback: propTypes.object.isRequired,
};

export default ModalFeedback;
