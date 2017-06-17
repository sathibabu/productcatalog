import React, {Component} from 'react';
import Axios from 'axios'
class Item extends Component {

	constructor(){
		super();
		//this._deleteItem = this._deleteItem.bind(this);
		this.state= {showitem:true}
	}

	render(){

		return (
		 <div >
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src="https://img01.olx.co.ke/images_olxke/1000841586_1_261x203_skyworth-digital-smart-tv-43-inch-brand-new-nairobi-cbd.jpg" alt="mango" />
			      <div className="caption">
			        <h3>{this.props.name}</h3>
			        <p>{this.props.description}</p>
			        <p><button  className="btn btn-primary" >Edit</button> <button  className="btn btn-default" onClick={this._deleteItem}>Delete</button></p>
			      </div>
			    </div>
			  </div>
			</div>
	    );
	};
}


export default Item;
