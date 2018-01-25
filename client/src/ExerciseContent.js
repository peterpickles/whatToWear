import React, { Component } from 'react';

class ExerciseContent extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="box box__exercise">
				<img className="box--img__exercise" src={this.props.exerciseImg} alt="Pushups"/>
				<div className="box--content__exercise-wrapper">
					<h4 className="box--content__exercise">{this.props.exercise}</h4>
					<h2 className="box--content__time">{this.props.calories}</h2>
				</div>
			</div>
		)
	}
}

export default ExerciseContent;