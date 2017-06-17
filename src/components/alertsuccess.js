import React, {Component} from 'react';

class AlertSuccess extends Component {
	render(){

		const barWidth = {
			width:'60%'
		};

		return (
		<div className="alert alert-success" role="alert">{this.props.message}</div>
	    );
	};
}


export default AlertSuccess;