import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/login';
import Welcome from './page/welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
