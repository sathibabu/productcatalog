import React, {Component} from 'react';

class AlertError extends Component {
	render(){

		const barWidth = {
			width:'60%'
		};

		return (
		<div className="alert alert-danger" role="alert">{this.props.message}</div>
	    );
	};
}


export default AlertError;