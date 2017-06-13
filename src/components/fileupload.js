import React, {Component} from 'react';

class FileUpload extends Component {
	render(){
		return (
		 <div className="container-fluid ">
		     <div className="col-md-7 col-md-offset-3">
		         <div className="row">
		         	<div>Upload Images comes here</div>
		         	<span>Name </span><span>Size </span><span>time </span>
                 </div>
                 <div className="row">
                 	<button >Upload</button>
                 </div>
		     </div>
             
		 </div>
	    );
	};
}


export default FileUpload;