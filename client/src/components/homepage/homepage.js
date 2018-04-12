import axios from 'axios';
import React, { Component } from 'react';
import logo from './logo.png';
import './homepage.css';


class homepage extends Component {
    state = {
        
        error: null
    }
    newUserRoute = (event) => {
    	axios.get("/newuser");
    }
    handleInputChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleCreate = (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        const { history } = this.props;

        // clear any previous errors so we don't confuse the user
        this.setState({
            error: null
        });

        // check to make sure they've entered a username and password.
        // this is very poor validation, and there are better ways
        // to do this in react, but this will suffice for the example
        if (!username || !password) {
            this.setState({
                error: 'A username and password is required.'
            });
            return;
        }

        // post an auth request
        axios.post('/api/auth', {
            username,
            password
        })
            .then(user => {
                // if the response is successful, make them log in
                history.push('/login');
            })
            .catch(err => {

                this.setState({
                    error: err.response.data.message || err.message
                });
            });
    }
    render() {
        const { error } = this.state;

        return (
            
        <div className="App">

                <div className="container-fluid">
            
                    <div className="col-lg-12 text-center">
                        
                            <img height="175" width="300" src={logo} />
                        
                    </div>
                </div>
 
			<div className="container">

				

    			<div className="row">
      				<div id="description" className="col-lg-10 col-lg-offset-1">
        				<div className="">
          					<div className="bio text-center">
          					Welcome to Spin-Mix - the world's only local DJ database! What we do is simple...we want to help connect bars, clubs, and individuals
                            with local DJs in their area, to provide access to the best talent, and musical diversity available.
                            Please login, or sign up for an account below to start searching local 
                            DJs in your area.
          					</div>
        				</div>
      				</div>
    			</div>
    			<div className="row col-lg-12 text-center">
                	<div className="btn-group" id="login" role="group" aria-label="...">
                      <a href="/login" ><button href="/login" type="submit" id="login-route" className="btn btn-default">Login</button></a>
                      
                	</div>
                	<div className="btn-group" role="group" aria-label="...">
                		<a href="/newuser"><button id="new-account" className="btn btn-default">Create Account</button></a>
            		</div>
            	</div>


			</div>

		</div>
        );
    }
}

export default homepage;





