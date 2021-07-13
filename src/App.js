import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/home';
import Search from './Components/search';

function App() {
  return (
    <Router>
      {/* <div>
        App Placeholder
      </div> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
