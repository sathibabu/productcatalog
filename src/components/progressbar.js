import React, {Component} from 'react';

class ProgressBar extends Component {
	render(){

		const barWidth = {
			width:'60%'
		};

		return (
		<div className="progress">
  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={barWidth}>
    60%
  </div>
</div>
	    );
	};
}


export default ProgressBar;