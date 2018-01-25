import React, { Component } from 'react';
const pushup = require('./img/pushup.png')

class Home extends Component {
  render(){
    return (
        <div className="container">
          <div className="search-area">

            <div className="box box__search-bar">
              <input className="box--search-bar" type="text" placeholder="What do you need to undo?" />
            </div>

            <div className="box box__search-content">
              <img className="box--img__search" src="https://images-na.ssl-images-amazon.com/images/I/81DFDndTFOL._SL1500_.jpg" alt="Donut"/>
              <div className="box--content__name">
                <p>Name: </p>
                <p>Donut</p>
              </div>
              <div className="box--content__calories">
                <p>Calories: </p>
                <p>200</p>
              </div>
            </div>

          </div>
          <div className="exercise-area">
            <div className="box box__exercise">
              <img className="box--img__exercise" src = {String(pushup)} alt="Pushups"/>
              <div className="box--content__exercise-wrapper">
                <h4 className="box--content__exercise">Pushups</h4>
                <h2 className="box--content__time">34min</h2>
              </div>
            </div>

            <div className="box box__exercise">
              <img className="box--img__exercise" src="/img/squat.png" alt="Squats"/>
              <div className="box--content__exercise-wrapper">
                <h4 className="box--content__exercise">Squats</h4>
                <h2 className="box--content__time">24min</h2>
              </div>
            </div>

            <div className="box box__exercise">
              <img className="box--img__exercise" src="../running.png" alt="Running"/>
              <div className="box--content__exercise-wrapper">
                <h4 className="box--content__exercise">Running</h4>
                <h2 className="box--content__time">13min</h2>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Home;
