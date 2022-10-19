import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Word from './page/reading';
import { Bottom } from './common/compnents';
import styles from './style.module.less';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.body}>
          <Switch>
            <Route exact path="/">
              <Word />
            </Route>
            <Route exact path="/reading">
              <div>todo</div>
            </Route>
            <Route exact path="/write">
              <div>message</div>
            </Route>
            <Route exact path="/me">
              <div>me</div>
            </Route>
          </Switch>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </Router>
  );
}

export default App;
