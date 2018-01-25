import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import SearchContent from './SearchContent.js';
import ExerciseContent from './ExerciseContent';


// EXERCISE 1
const exName1 = 'Pushups';
const exMET1 = 8;
const exImg1 = 'https://www.fillmurray.com/200/300';
// EXERCISE 2
const exName2 = 'Squats';
const exMET2 = 7.8;
const exImg2 = 'https://www.fillmurray.com/200/300';
// EXERCISE 3
const exName3 = 'Sexy Time';
const exMET3 = 5.8;
const exImg3 = 'https://www.fillmurray.com/200/300';
const pushup = require('./img/pushup.png');


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      calories: '',
      foodImg: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
			name: event.target.value
		});
  }

  handleSubmit(e) {
    e.preventDefault();
    var base = this
    let foodAPI = "https://api.edamam.com/api/nutrition-data?app_id=242d9612&app_key=8ff67568033c789ed1010151ade5fc7e&ingr=1%20"+this.state.name;

    fetch(foodAPI)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({
          foodObj: json,
          calories: json.calories
        });
        console.log(this.state.foodObj.calories);
      }).catch((ex) => {
        console.log('error when parsing');
      });

    // this.setState({
    //   name: 'Donut',
    //   calories: '200',
    //   foodImg: 'https://images-na.ssl-images-amazon.com/images/I/81DFDndTFOL._SL1500_.jpg',

    // });
  }

  render(){
    let exContent = <div />;
    if(!this.state.name){
      exContent = (
        <div> 
          <h1>Please eat, your grandmother is worried</h1>
        </div>
      );
    } 
    else {
      exContent = (
        <div>
          <ExerciseContent exercise={exName1} met={exMET1} calories={this.state.calories} exerciseImg={exImg1} />
          <ExerciseContent exercise={exName2} met={exMET2} calories={this.state.calories} exerciseImg={exImg2} />
          <ExerciseContent exercise={exName3} met={exMET3} calories={this.state.calories} exerciseImg={exImg3} />  
        </div>
      );
    }
    return (

      <div className="container">
         <div className="search-area">   

          <div className="box box__search-bar">
            <form onSubmit={this.handleSubmit}>
              <input className="box--search-bar" type="text" placeholder="What do you need to undo?" onChange={this.handleChange} />
              <input type="submit" value="Submit"/>
            </form>
          </div>
          <SearchContent name={this.state.name} calories={this.state.calories} foodImg={this.state.foodImg} />          
        </div>
        <div className="exercise-area"> 
          {exContent}


        </div>
      </div>
    );
  }
}

export default Home;
