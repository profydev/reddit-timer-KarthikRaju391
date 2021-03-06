import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/home';
import Search from './Components/search';
import Footer from './Components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/searchpage">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
