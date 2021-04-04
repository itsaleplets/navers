import { useEffect } from 'react';
import '../styles/Login.css';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if(!token) {
      history.push('/login')
    }
  });
  return (
    <section className="body">
      oi
    </section>
  );
}

export default Home;
