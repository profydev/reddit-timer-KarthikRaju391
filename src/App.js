import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<div>Home</div>
					</Route>
					<Route exact path="/search">
						<div>Search</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
