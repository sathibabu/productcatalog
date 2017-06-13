import React, {Component} from 'react';

class AlertSuccess extends Component {
	render(){

		const barWidth = {
			width:'60%'
		};

		return (
		<div className="alert alert-success" role="alert">Well done! You successfully read this important alert message.</div>
	    );
	};
}


export default AlertSuccess;