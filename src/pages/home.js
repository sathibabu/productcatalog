import React, {Component} from 'react';
import NavBar from '../components/navbar';
//import Board from '../components/board';
import Item from '../components/item';

import Data from '../rest/data'

import Pagination from '../components/pagination'

import Axios from 'axios';


class Home extends Component {

	constructor(){
      super();
      this.state = {data:[]};
	}

	componentWillMount(){
		//Make a Rest API
		Axios.get(Data.products_url).then(response=>{
			//console.log(response.data)
			this.setState({data:response.data});
		}).catch(err=>{

		});
		
	}

	render(){

		let items = this.state.data.map((item,index)=>{
  			return	<Item deleteurl={Data.products_dlete_url} name={item.name} id={item.item_id} price={item.price} description={item.description} url={item.img} key={index}/>          
		});


		return (
			<div className="container">
			  <div className="row">
			  	<NavBar />
			  </div>
			  <div className="row" />
			  <div className="row col-md-10 col-md-offset-1 col-sm-6">
			  	{items}

			  </div>
			  <div className="row col-md-10 col-md-offset-2 col-sm-6">
			    <Pagination />
			  </div>
              
			</div>
	    );
	};
}


export default Home;