import React from 'react';
import logo from './logo.png';
import './LoginRequiredPage.css';

const LoginRequiredPage = (props) => (
<div className="App">
	<div className="container-fluid">
            
    	<div className="col-lg-12 text-center">
                        
            <img height="175" width="300" src={logo} />
                        
    	</div>
  	</div>
	
	<div className="container">
    	<div className="warning bio col-lg-8 col-lg-offset-2 text-center">
    	WARNING: You can't access this page unless you <a href="/login">log in</a>.
    	</div>
    </div>

</div>
);
export default LoginRequiredPage;