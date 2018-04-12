import React from "react";
import {Component} from "react";
import axios from "axios";
import ResultsComponent from '../results';
import logo from './logo.png';
import './search.css';


class searchWindow extends Component { 

  state = {

    city: null,
    searchResults: [],
    error: null

  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.city);
  }
  handleSearch = (event) => {
    event.preventDefault();

    const {city, searchResults}
      = this.state;
    const { history } = this.props;
    console.log("the city is " ,city);
    axios.get('/api/search/' + city, {


    })
    .then(resp => {
                
            
            this.setState({
              
                  searchResults: resp.data 
                });
                
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

      <div id="description" className="col-lg-8 col-lg-offset-2">
          <div className="">
              <div className="bio text-center">
                  To get started, type the name of a city into the search bar
                  and either hit "enter", or click the "Search" button.
              </div>
          </div>
      </div>

    </div>

		<div className="row">
    
      		<div id="search-window" className="col-lg-6 col-lg-offset-3">

          		<div className="panel panel-default">
             		 <div className="panel-body">
                		<form onSubmit={this.handleSearch}>
                  			<div className="form-row">
                    			<div className="form-group col-md-12">
                      				<label>City</label>
                       				<input onChange={this.handleInputChanged} type="text" className="form-control" name="city" placeholder="City"></input>
                    			</div>
                  			</div>
                  
                  			
                  
                  			<div className="form-row col-lg-3">
                    			<div className="btn-group" role="group" aria-label="...">
                      				<button type="submit" id="new-user-submit" className="btn btn-default">Search</button>
                    			</div>
                  			</div>
                		</form>
              		</div>

        </div>
      </div>
    </div>
    <div>
    <div className="panel-default text-center col-md-8 col-md-offset-2">
    { this.state.searchResults.length > 0 ?
      
      this.state.searchResults.map(user => (
        <ResultsComponent {...user}/>
      ))
      
      : 
      <div className="panel-default text-center col-md-8 col-md-offset-2">
        <div className="panel-body" id="no-results">
          No searches run, or no matches for search.
        </div>
      </div>
      
    }

    </div>
    </div>


    <div className="row">

    </div>

	</div>

</div>
)};
};
export default searchWindow;