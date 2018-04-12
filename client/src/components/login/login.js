import React from "react";
import {Component} from 'react';
import axios from 'axios';
import { update } from '../../withUser';
import logo from './logo.png';
import './loginStyle.css';

class LoginWindow extends Component { 

  state = { 

    username: null,
    password: null
  }

  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const {username, password} = this.state;
    const { history } = this.props;

    //post an auth request
    axios.post('/api/auth', {

    username,
    password      

    })
    .then(user => {
                // if the response is successful, update the current user and redirect to the home page
                update(user.data);
                history.push('/search');
            })
            .catch(err => {

                this.setState({
                    error: err.response.status === 401 ? 'Invalid username or password.' : err.message
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
                  Please use your credentials to login below.
              </div>
          </div>
      </div>
    </div>

  	<div className="row">
    
      <div id="login-window" className="col-lg-6 col-lg-offset-3">

          <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title text-center">Login</h3>
            </div>
         
    
              <div className="panel-body">
                <form onSubmit={this.handleLogin}>
                {error &&
                    <div>
                        {error}
                    </div>
                }
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputEmail4">Username</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="username" placeholder="Username"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputEmail4">Password</label>
                        <input onChange={this.handleInputChanged} type="password" className="form-control" name="password" placeholder="Password"></input>
                    </div>
                  </div>
                  <div className="form-row col-lg-12">
                    <div className="btn-group" role="group" aria-label="...">
                      <button type="submit" id="login-submit" className="btn btn-default">Login</button>
                    </div>
                    <span>
                      <a href="/newuser"> Not a member? Sign up here!</a>
                    </span>
                  </div>
                  
                  
                  
                </form>
              </div>

        </div>
      </div>
    </div>
	</div>
</div>
);
}
}

export default LoginWindow;