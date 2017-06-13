import React, {Component} from 'react';
import {Link } from 'react-router';

class NavBar extends Component {
	render(){
		return (
		 <nav className="navbar navbar-inverse navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <a className="navbar-brand" href="#">Product catalog</a>
		        </div>
		        <div id="navbar" className="collapse navbar-collapse">
		          <ul className="nav navbar-nav">
		            <li className="active"><Link to="/">Home</Link></li>
		            <li><Link to="/upload">Upload</Link></li>
		            <li><Link to="/contact">Contact</Link></li>
		          </ul>
		        </div>
		      </div>
		    </nav>

	    );
	};
}


export default NavBar;