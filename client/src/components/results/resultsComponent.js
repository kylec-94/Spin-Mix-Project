import React from "react";
import {Component, createElement} from 'react';
import axios from 'axios';
import './resultsPage.css';

const ResultsComponent = (props) => {
  return (

    <div className="well text-center col-lg-12">
          
            { props.picture ?
            <div id="profile-pic" className="col-lg-4">
            <img height="200" width="200" src={props.picture} />
            </div>
          : 
            <div id="profile-pic" className="col-lg-4 ">
            <img height="200" width="200" src="http://drinks.world/wp-content/uploads/2016/10/shutterstock_415922566.jpg" />
            </div>

          }
          
          
          <div className="col-lg-6 text-center">
          <h5 id="name">
          Name: {props.aliasOrg}
          </h5>
          
          
          <h5 id="city">
          City: {props.city}
          </h5>
          
    
          <h5 id="email">
          Email: {props.email}
          </h5>
          
          
          <h5 id="musicGenres">
          Music Genres: {props.musicGenres}
          </h5>
          
          
          <span>
          { props.soundcloud ?
          <a href={props.soundcloud} target="_blank"><img id="soundcloud" height="50" width="50" src="http://icons.iconarchive.com/icons/danleech/simple/256/soundcloud-icon.png" /></a>
          
          : ""
          }
          { props.twitter ?
          <a href={props.twitter} target="_blank"><img id="twitter" height="50" width="50" src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png" /></a>
          
          : ""
          }
          { props.facebook ?
          <a href={props.facebook} target="_blank"><img id="facebook" height="50" width="50" src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/256/social-facebook-box-blue-icon.png" /></a>
          
          : ""
          }
          { props.instagram ?
          <a href={props.instagram} target="_blank"><img id="soundcloud" height="50" width="50" src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png" /></a>
          
          : ""
          }
          </span>
          </div>
    </div>
  
  )
}



// class ResultsComponent extends Component {

// state = { 

//     results: null
//   }

//   handleInputChanged = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   handleCreate = (event) => {
//     event.preventDefault();

//     const {results}
//       = this.state;
//     const { history } = this.props;

//     this.setState({
//       error: null
//     });

//     if (!results) {
//             this.setState({
//                 error: 'No results match your search.'
//             });
//             return;
//     }
//     axios.get('/api/results', {

      

//     })
//     .then(users => {
//                 // if the response is successful, go to confirmation page
//                 history.push('/search');

//             })
//             .catch(err => {

//                 this.setState({
//                     error: err.response.data.message || err.message
//                 });
//             });
//   }

// render() {

// 	const { error } = this.state;

// 	return (

// 	<div className="App">
// 		<div className="container">

// 			<div className="row">

// 				<div className="col-lg-12">

// 					<div className="panel-body">

//             <div className="results-well">
              
//                 {resultArr.map(user => (
//                   <UserResult props={user}/>
//                 ))}

//             </div>
					
// 					</div>

// 				</div>

// 			</div>

// 		</div>
// 	</div>


// 	)};

// };

export default ResultsComponent;