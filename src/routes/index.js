import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNaver from '../pages/AddNaver';
import Home from '../pages/Home';
import Login from '../pages/Login';
import EditNaver from '../pages/EditNaver';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/adicionar" component={AddNaver} />
      <Route path="/editar" component={EditNaver} />
    </Switch>
  </Router>
)

export default Routes;
