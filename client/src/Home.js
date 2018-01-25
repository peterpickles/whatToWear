import React, { Component } from 'react';
import SearchContent from './SearchContent.js';
import ExerciseContent from './ExerciseContent';


// EXERCISE 1
const exName1 = 'Pushups';
const exMET1 = 8;
const exImg1 = 'https://d30y9cdsu7xlg0.cloudfront.net/png/660576-200.png';
// EXERCISE 2
const exName2 = 'Squats';
const exMET2 = 7.8;
const exImg2 = 'https://www.fillmurray.com/200/300';
// EXERCISE 3
const exName3 = 'Sexy Time';
const exMET3 = 5.8;
const exImg3 = 'https://www.fillmurray.com/200/300';
const pushup = require('./img/pushup.png');


// GIPHY URL
const giphyAPI_URL = "http://api.giphy.com/v1/gifs/search";
const foodAPI_URL = "https://api.edamam.com/api/nutrition-data?app_id=242d9612&app_key=8ff67568033c789ed1010151ade5fc7e&ingr=1%20";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      name: '',
      calories: '',
      foodImg: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
			value: event.target.value
		});
  }

  handleSubmit(e) {
    e.preventDefault();
    let base = this
    let giphyURL = `${giphyAPI_URL}?q=${this.state.name}&api_key=0Efg5mlFqEAm66u34MZpWipb4gfAsT6A&limit=25`
    let foodURL = foodAPI_URL + this.state.name;

    this.setState({
			name: this.state.value
		});

    //GIPHY API PULL
    fetch(giphyURL)
    .then((res) => {
      return res.json()
    }).then((json) => {
      base.setState({
        foodImg: json.data
      });
      console.log("food img is", this.state.foodImg);
    }).catch((ex) => {
      console.log('giphy phetch error');
    })

    //CALORIE API PULL
    fetch(foodURL)
    .then((res) => {
      return res.json()
    }).then((json) => {
      base.setState({
        foodObj: json,
        calories: json.calories
      });
      console.log(this.state.foodObj.calories);
    }).catch((ex) => {
      console.log('food fetch error');
    });
  }


  render(){
    let exerciseContent = <div />;
    let searchContent = <div />;
    if(!this.state.name){      
      searchContent = (
        <div className="box box__search-bar pre-search">
          <form onSubmit={this.handleSubmit}>
            <input className="box--search-bar" type="text" placeholder="What do you need to undo?" onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      );
      exerciseContent = (
        <div className="pre-search"> 
          <h1>Please eat something, your grandmother worries about you.</h1>
        </div>
      );
    } 
    else {
      searchContent = (
        <div>
          <div className="box box__search-bar">
            <form onSubmit={this.handleSubmit}>
              <input className="box--search-bar" type="text" placeholder="What do you need to undo?" onChange={this.handleChange} />
              <input type="submit" value="Submit"/>
            </form>
          </div>
          <SearchContent name={this.state.name} calories={this.state.calories} foodImg="https://d30y9cdsu7xlg0.cloudfront.net/png/830214-200.png" />     
        </div>
      );
      exerciseContent = (
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

          {searchContent}
        
        </div>
        <div className="exercise-area"> 
        
          {exerciseContent}
        
        </div>
      </div>
    );
  }
}

export default Home;
