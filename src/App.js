import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Components/header';
import Home from './Components/home';
import Search from './Components/search';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
