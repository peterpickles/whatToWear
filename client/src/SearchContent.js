import React, { Component } from 'react';

// const SearchIMG = props => {
//   // MAP THE RESULTS TO AN ARRAY OF <LI> TAGS
//   const image = (results) => (
//     // KEY IS NEEDED TO PREVENT ERROR
//     <img key={results.id} src={results.images.fixed_width_downsampled.url} alt={results.title} />
// 	);
//   //RETURN ARRAY OF LI TAGS INSIDE OF A UL TAG
//   return <div>{image}</div>;
// };

class SearchContent extends Component {
	render(){
		return(
			<div className="box box__search-content">
				{/* <img className="box--img__search" src={this.props.foodImg}/> */}
				{/* <SearchIMG results={this.state.results} /> */}
				<img className="box--img__search" src="https://media1.giphy.com/media/Rr4kHDTE2qZqM/200w_d.gif" alt={this.props.name + " image"} />
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