import Provider from './context/Provider'
import './App.css';
// import Login from './pages/Login';
import Routes from './routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider> 
  );
}

export default App;
