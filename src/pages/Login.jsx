import '../styles/Login.css';
import logo from '../images/logo.png';
import { useState } from 'react';
import login from '../services/api';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInvalid, setLoginInvalid] = useState(false);

  const clickHandler = async () => {
    const loginRes = await login(email, password); 
    if(loginRes) {
      const { token } = loginRes.baerer;
      localStorage.setItem('token', token )
      history.push('/')
    } else {
      setLoginInvalid(true);
    }
  };

  return (
    <section className="body">
      <div className="loginContainer">
        <img src={logo} alt="nave.rs black rocket" />
        {loginInvalid && <span>Login Inválido</span>}
        <form>
          <label>E-mail</label>
          <input
            placeholder="E-mail"
            onChange={({target}) => setEmail(target.value)}
          />
          <label>Senha</label>
          <input
            placeholder="Senha"
            type="password"
            onChange={({target}) => setPassword(target.value)}
          />
          <button type="button" onClick={clickHandler}>
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
