import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span className="nav-link">
          <Link to="/profile"><i class="fa fa-user-o" aria-hidden="true"></i> Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span className="nav-link">
          <Link to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
          <Link to="/signup"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Sign Up</Link>
        </span>);
    }

    return(
        <div>
          <span id="nav-link">
            <nav className="nav">
              <a href="/">
              <img className="logo" herf='/' src ='https://www.equilibrium.design/wp-content/uploads/2016/07/equilibrium.png' alt="Logo"/>
              </a>
              {links}
            </nav>
          </span>
        </div>
      );
  }
}

export default Nav;