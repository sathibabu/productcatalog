import React, {Component} from 'react';
import NavBar from '../components/navbar';
import FileUpload from '../components/fileupload';


class Upload extends Component {
	render(){

		const barWidth = {
			width:'60%'
		};

		return (
			<div className="container">
			  <div className="row">
			  	<NavBar />
              </div>
			 
              <div className="row ">
              		<FileUpload />
              </div>

			</div>
	    );
	};
}


export default Upload;