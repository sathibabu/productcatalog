import React, {Component} from 'react';
import AlertError from './alerterror'
import AlertSuccess from './alertsuccess'
import Axios from 'axios'


class FileUpload extends Component {
	constructor(){
      super();
      this.state = {shoulShowAlters:false};
      this._handleChange = this._handleChange.bind(this);
      this.filesInput =null;          
	}


    _handleChange(event){
    	//Upload filess here
    	event.preventDefault();
    	var files = this.filesInput.files
    	let formData = new FormData();

    	for (var key in files) {
		    // check if this is a file:
		    if (files.hasOwnProperty(key) && files[key] instanceof File) {
		        formData.append(key, files[key]);
		    }
		}
    	console.log(formData);
       Axios.post('http://localhost:3000/upload',formData,function(err,res){

       });

    }

	render(){
        
        /*
        <div className="row">			  
			<AlertSuccess message="Well done! You successfully read this important alert message.."/>
		</div>
		<div className="row">			  
			<AlertError message="Oh snap! Change a few things up and try submitting again."/>
		</div>
		 
        */
        let alertMessage = "";    
        if(this.state.shoulShowAlters){
            alertMessage = <div className="row"><AlertSuccess message="Well done! You successfully read this important alert message.."/></div>;
            
        }

		return (

		<div className="jumbotron">
				<p>Upload, CSV files</p>
				<input className="file" type="file" ref={(input) => { this.filesInput = input; }} onChange={this._handleChange}/>
				<input className="btn btn-primary btn-lg" type="submit" value="Upload"/>
			{alertMessage}
		</div>
	    
	    );
	};
}


export default FileUpload;