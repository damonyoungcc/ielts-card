import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Word from './page/reading';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Word} />
      </Switch>
    </Router>
  );
}

export default App;
