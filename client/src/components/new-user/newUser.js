import axios from 'axios';
import React from "react";
import {Component} from 'react';
import logo from './logo.png';
import './newUser.css';

class newUser extends Component {

  state = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    aliasOrg: null,
    email: null,
    city: null,
    musicGenres: null,
    barClub: null,
    djPerformer: null,
    picture: null, 
    soundcloud: null,
    twitter: null,
    facebook: null, 
    instagram: null,
    error: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

  }
  handleCreate = (event) => {
    event.preventDefault();

    
    console.log(event.target);
    const {firstName, lastName, username, password, aliasOrg, email, city, barClub, djPerformer, musicGenres, picture, 
      soundcloud, twitter, facebook, instagram} = this.state;
    const { history } = this.props;

    this.setState({
      error: null
    });
    console.log(this.state);
    console.log("we got here!");
    axios.post('/api/users', {

      firstName,
      lastName,
      username,
      password,
      aliasOrg,
      email,
      city,
      barClub,
      djPerformer,
      musicGenres,
      picture,
      soundcloud,
      twitter,
      facebook,
      instagram

    })
    .then(user => {
                // if the response is successful, go to confirmation page
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
    
      <div className="col-lg-8 col-lg-offset-2">

          <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title text-center">Enter your information below to create a new account!</h3>
            </div>
    
              <div className="panel-body">

                <form >
                {error && 
                  <div>
                    {error}
                  </div>
                }

                  <div className="form-row">
    
                    <div className="form-group col-md-6">
                      <label for="firstName">First Name (required)</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="firstName" placeholder="First name"></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="lastName">Last Name (required)</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="lastName" placeholder="Last Name"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputEmail4">Username (required)</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="username" placeholder="Username"></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword4">Password (required)</label>
                        <input onChange={this.handleInputChanged} type="password" className="form-control" name="password" placeholder="Password"></input>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputEmail4">Alias/Organization (required)</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="aliasOrg" placeholder="Alias/Organization"></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword4">Email (required)</label>
                        <input onChange={this.handleInputChanged} type="email" className="form-control" name="email" placeholder="Email"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label for="inputEmail4">City (required)</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="city" placeholder="City"></input>
                    </div>
                  </div>
                  <div className="form-row col-md-12">
                    <label>Please answer "yes" or "no" to both of the following fields.</label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="firstName">Are you a bar/club?</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="barClub" placeholder=""></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="lastName">Are you a DJ?</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="djPerformer" placeholder=""></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Music Genres (required)</label>
                          <textarea name="musicGenres" onChange={this.handleInputChanged} className="form-control" placeholder="Write the genres you're interested in (ex: House, EDM, tech house)" id="exampleFormControlTextarea1 musicGenres" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <label for="inputEmail4">Link for profile picture.</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="picture" placeholder="Picture URL"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <label for="inputEmail4">Link to SoundCloud</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="soundcloud" placeholder="SoundCloud"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <label for="inputEmail4">Link to Twitter</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="twitter" placeholder="Twitter"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <label for="inputEmail4">Link to Facebook</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="facebook" placeholder="Facebook"></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <label for="inputEmail4">Instagram Handle</label>
                        <input onChange={this.handleInputChanged} type="text" className="form-control" name="instagram" placeholder="Instagram handle"></input>
                    </div>
                  </div>
                  <div className="form-row col-lg-3">
                    <div className="btn-group" role="group" aria-label="...">
                      <button onClick={this.handleCreate} type="submit" id="new-user-submit" className="btn btn-default">Create Account</button>
                    </div>
                  </div>



                </form>



                
              </div>
    
        </div>

      </div>
    
    </div>
  </div>

</div>
)};
};

export default newUser;