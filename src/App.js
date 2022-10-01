import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Word from './page/word';
import Reading from './page/reading';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Word} />
        <Route exact path="/reading" component={Reading} />
      </Switch>
    </Router>
  );
}

export default App;
