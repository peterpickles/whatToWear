import React, { Component } from 'react';

//150 LBS DEFAULT
const weight = 68.0389;

class ExerciseContent extends Component {

	test = () => {
		let met = this.props.met;
		let cal = this.props.calories;
		let mins = Math.ceil(60 * (cal / (met * weight)));
		return mins;
	}

	render(){
		return (
			<div className="box box__exercise">
				<img className="box--img__exercise" src={this.props.exerciseImg} alt="Pushups"/>
				<div className="box--content__exercise-wrapper">
					<h4 className="box--content__exercise">{this.props.exercise}</h4>
					<h1 className="box--content__time">{this.test()}<small>mins</small></h1>
				</div>
			</div>
		)
	}
}

export default ExerciseContent;