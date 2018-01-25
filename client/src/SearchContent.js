import React, { Component } from 'react';

// const Suggestions = props => {
//   // MAP THE RESULTS TO AN ARRAY OF <LI> TAGS
//   const options = props.foodImg.map((
//     item //USING ( INSTEAD OF { IS OK BECAUSE ITS A THING APPARENTLY
//   ) => (
//     // KEY IS NEEDED TO PREVENT ERROR
//     <li key={item.id}>
//       <img src={item.images.fixed_width_downsampled.url} alt={item.title} />
//     </li>
//   ));
//   //RETURN ARRAY OF LI TAGS INSIDE OF A UL TAG
//   return <ul>{options}</ul>;
// };

class SearchContent extends Component {
	
	render(){
		return(
			<div className="box box__search-content">
				{/* <SearchIMG results={this.state.results} /> */}
				{/* <Suggestions /> */}
				<img className="box--img__search" src={this.props.foodImg} alt={this.props.name + " image"} />
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