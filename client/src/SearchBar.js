import React, { Component } from 'react';

class SearchBar extends Component {
	render(){
		return(
			<div className="box box__search-bar">
				<input className="box--search-bar" type="text" placeholder="What do you need to undo?" />
			</div>
		);
	}
}

export default SearchBar;