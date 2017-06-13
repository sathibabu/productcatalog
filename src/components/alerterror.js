import React, {Component} from 'react';

class AlertError extends Component {
	render(){

		const barWidth = {
			width:'60%'
		};

		return (
		<div className="alert alert-danger" role="alert">Oh snap! Change a few things up and try submitting again.</div>
	    );
	};
}


export default AlertError;