import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
    </Switch>
  </Router>
)

export default Routes;