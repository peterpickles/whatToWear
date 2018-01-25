import React, { Component } from "react";
import Widget from "./Widget.js";
import "./App.css";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zipcode: "",
			weatherObj: {}
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
    this.setState({
			food: event.target.value
		});
  }

  	handleSubmit(event) {
    // console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    	var base= this

			let weatherApi = "https://api.edamam.com/api/nutrition-data?app_id=242d9612&app_key=8ff67568033c789ed1010151ade5fc7e&ingr=1%20"+this.state.food
			
			fetch(weatherApi)
				.then((response) => {
					return response.json()
				}).then((json) => {
					base.setState({
						weatherObj: json
					});
					console.log(this.state.weatherObj);
				}).catch((ex) => {
					console.log("An error occured while parsing")
				})
  }
		render() {
    return (
      <div className="Contacts">
			
        <h1>Checkout what I can do! See the weather is where you at</h1>
		<form onSubmit={this.handleSubmit}>
        <label>
          ZipCode:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
				
	      <div>
	      <Widget weather={this.state.weatherObj} food={this.state.food} />
	      </div>

      </div>
    );
  }
}

export default Search;