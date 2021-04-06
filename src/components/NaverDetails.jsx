import { useEffect, useState } from 'react';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";
import '../styles/NaverDetails.css';
// import naverImg from '../images/naver.png';

function NaverCard({ naver, handleModal }) {
  const [age, setAge] = useState('');
  const [companyTime, setCompanyTime] = useState('');

  useEffect(() => {
    const { birthdate, admission_date } = naver
    setCompanyTime(calculateDate(admission_date));
    setAge(calculateDate(birthdate));
  }, []);

  const deleteNaver = () => {
    console.log('ok')
  }

  const calculateDate = (date) => {
    const newDate = new Date(date);
    // console.log('calculate')
    return (Math.floor((Date.now() - newDate) / (31557600000)));
  }

  return (
    <div className="details">
      <img src={naver.url} alt=""/>
      <section className="naverInfo">
        <div className="close">
          <span className="name">{naver.name}</span>
          <MdClose
            size={20}
            onClick={handleModal}
          />
        </div>
        <p>{naver.job_role}</p>
        <span>Idade</span>
        <p>{age}</p>
        <span>Tempo de empresa</span>
        <p>{`${companyTime} anos`}</p>
        <span>Projetos que participou</span>
        <p>{naver.project}</p>
        <div className="detailsIcon">
          <ImBin2
            onClick={deleteNaver}
            className="icon"
          />
          <MdEdit
            className="icon"
            size={18}
            // onClick={}
          />
        </div>
      </section>
    </div>
  );
}

export default NaverCard;
