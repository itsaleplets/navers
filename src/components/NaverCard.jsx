import { useState } from 'react';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import '../styles/NaverCard.css';
// import '../styles/Home.css';

import naverImg from '../images/naver.png';
import NaverDetails from './NaverDetails';

function NaverCard({ naver, handleOpacity }) {
  const [modal, setModal] = useState(false);

  const deleteNaver = () => {
    console.log('ok')
  }

  const handleModal = () => {
    if(!modal) {
      document.body.style.background = 'rgb(0, 0, 0, 0.5)';
      setModal(!modal);
    } else {
      document.body.style.background = 'none';
      setModal(!modal);
    }
    handleOpacity()
  }

  return (
    <section className="navCard">
      <div
        key={naver.id}
        className="naver"
        onClick={handleModal}
      >
        <img src={naverImg} alt=""/>
        <span>{naver.name}</span>
        <p>{naver.job_role}</p>
        <ImBin2 onClick={deleteNaver} className="icon" />
        <MdEdit className="icon" size={18} />
        {modal && <NaverDetails naver={naver} handleModal={handleModal}/>}
      </div>
    </section>
  );
}

export default NaverCard;
