import React, {Component} from 'react';

import FileUpload from './fileupload';
import ProgressBar from './progressbar';

import AlertError from './alerterror';
import AlertSuccess from './alertsuccess';

class Board extends Component {
	render(){
		return (
		 <div className="container">
            <ProgressBar />
            <AlertError />
            <AlertSuccess />
   		 </div>

	    );
	};
}


export default Board;