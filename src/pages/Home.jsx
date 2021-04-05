import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import '../styles/Home.css';
import logo from '../images/logo.png';
import naver from '../images/naver.png';
// import NaversContext from '../context/NaversContext';

function Home() {
  const history = useHistory();
  const [deleteModal, setDeleteModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  // const { token } = useContext(NaversContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      history.push('/login')
    }
  });

  const addNaver = () => {
    history.push('/adicionar')
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload()
  };

  const deleteNaver = () => {
    console.log('ok')
  }

  const handleModal = () => {
    if(!showDetails) {
      document.body.style.background = 'rgb(0, 0, 0, 0.5)';
      // document.body.style.opacity = '0.5';
      // console.log(showDetails);
      setShowDetails(!showDetails);
    } else {
      document.body.style.background = 'none';
      // document.body.style.opacity = '100';
      setShowDetails(!showDetails);
    }
    

  }

  return (
    <section className="body home">
      <div className="top">
        <img src={logo} alt="nave.rs black rocket" />
        <button
         type="button"
          // className="logoutBtn"
          // className={ classe ? 'classe1' : 'classe2'}

          onClick={logout}
        >
          Sair
        </button>
      </div>
      <div className="top">
        <h1>Navers</h1>
        <button
          className="addNaver"
          onClick={addNaver}
        >
          Adicionar Naver
        </button>
      </div>
      <section className="navers">
        {/* {console.log(showDetails)} */}
        {!showDetails ? 
          <div className="naver" onClick={handleModal}>
            <img src={naver} alt=""/>
            <span>Nome</span>
            <p>Profissão</p>
            <ImBin2 onClick={deleteNaver} className="icon" />
            <MdEdit className="icon" size={18} />
          </div> 
        :
          <div className="details" onClick={handleModal}>
            <img src={naver} alt=""/>
            <div className="naverInfo">
              <span className="name">Nome</span>
              <p>Profissão</p>
              <span>Idade</span>
              <p>Lorem Ipsum</p>
              <span>Tempo de empresa</span>
              <p>Lorem Ipsum</p>
              <span>Projetos que participou</span>
              <p>Lorem Ipsum</p>
              <ImBin2 onClick={deleteNaver} className="icon" />
              <MdEdit className="icon" size={18} />
            </div>
          </div>
        }
        
        {/* {deleteModal && 
          <div>
          
          </div>
        } */}
        {/* <div className="naver">
          <img src={naver} alt=""/>
          <span>Nome</span>
          <p>Profissão</p>
          <ImBin2 className="icon" />
          <MdEdit className="icon" size={18} />
        </div>
        <div className="naver">
          <img src={naver} alt=""/>
          <span>Nome</span>
          <p>Profissão</p>
          <ImBin2 className="icon" />
          <MdEdit className="icon" size={18} />
        </div>
        <div className="naver">
          <img src={naver} alt=""/>
          <span>Nome</span>
          <p>Profissão</p>
          <ImBin2 onClick={deleteNaver} className="icon" />
          <MdEdit className="icon" size={18} />
        </div> */}
      </section>
    </section>
  );
}

export default Home;
