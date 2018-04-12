import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginWindow from "./components/login/index.js";
import newUser from "./components/new-user/index.js";
import searchWindow from "./components/search/index.js";
import ResultsComponent from "./components/results/index.js";
import homepage from "./components/homepage/index.js";
import ProtectedRoute from './protectedRoute';
import LoginRequiredPage from './LoginRequiredPage.js'



class App extends Component {

	render(){

	return(

	<div className="App">
		<Router>	
			<Switch>
				<Route exact path="/" component={homepage} />
				<Route exact path="/login" component={LoginWindow} />
				<Route exact path="/newuser" component={newUser} />
				<ProtectedRoute exact path="/search" redirectTo="/login-required" component={searchWindow} />
				<Route exact path="/results" component={ResultsComponent} />
				<Route exact path="/login-required" component={LoginRequiredPage} />	
			</Switch>
		</Router>
	</div>
);
}
}

export default App;
