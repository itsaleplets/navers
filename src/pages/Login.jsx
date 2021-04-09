import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/api';
import logo from '../images/logo.png';
import '../styles/Login.css';

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInvalid, setLoginInvalid] = useState(false);

  useEffect(() => {
    localStorage.clear()
  }, []);

  const clickHandler = async () => {
    const { token } = await login(email, password); 
    if(token) {
      localStorage.setItem('token', token );
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
            onChange={({ target }) => setEmail(target.value)}
          />
          <label>Senha</label>
          <input
            placeholder="Senha"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
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
