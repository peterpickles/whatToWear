import React, { Component } from 'react';

class SearchContent extends Component {
	render(){
		return(
			<div className="box box__search-content">
				<img className="box--img__search" src={this.props.foodImg}/>
				<div className="box--content__name">
					<p>Name: </p>
					<p>{this.props.name}</p>
				</div>
				<div className="box--content__calories">
					<p>Calories: </p>
					<p>{this.props.calories}</p>
				</div>
			</div>
		);
	}
}

export default SearchContent;