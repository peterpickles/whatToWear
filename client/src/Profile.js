import React, { Component } from 'react';

class Profile extends Component {
  render(){
    if(this.props.user && this.props.user.name){
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
        </div>);
    }
    else {
      return (<div className='profile-info'>
      <p>Please sign up or login to see what you need to undo!
      </p>
      <br></br>
      <img className="logo-profile" herf='/' src ='https://www.equilibrium.design/wp-content/uploads/2016/07/equilibrium.png' alt="Logo"/>
      </div>
      );
    }
  }
}

export default Profile;