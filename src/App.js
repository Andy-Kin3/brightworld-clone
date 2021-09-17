import React from 'react'
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Gift from './Gift';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path="/gift">
            <Gift />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
