import React, { Component } from 'react';

//150 LBS DEFAULT
const weight = 68.0389

class ExerciseContent extends Component {
	constructor(props){
		super(props);
	}

	test = () => {
		let met = this.props.met;
		let cal = this.props.calories;
		let mins = Math.ceil(60 * (cal / (met * 68.0389)));
		return mins;
	}

	render(){
		return (
			<div className="box box__exercise">
				<img className="box--img__exercise" src={this.props.exerciseImg} alt="Pushups"/>
				<div className="box--content__exercise-wrapper">
					<h4 className="box--content__exercise">{this.props.exercise}</h4>
					<h2 className="box--content__time">{this.test()}mins</h2>
				</div>
			</div>
		)
	}
}

export default ExerciseContent;