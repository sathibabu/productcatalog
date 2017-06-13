import React, {Component} from 'react';
import NavBar from '../components/navbar';
import Board from '../components/board';


class Home extends Component {
	render(){

		const barWidth = {
			width:'60%'
		};

		return (
			<div >
			  <NavBar />
			  <Board />
			</div>
	    );
	};
}


export default Home;