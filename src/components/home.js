import React, { Component } from 'react';
import './home.css';
import { Link } from  'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div className="main-container">
          <div className="houser-container">
            <div className="houser-logo">
            <img src="" alt="logo"></img>

            </div>

            <div className="main-login">
              <input type="text" placeholder="Type in user name" className="username"></input>
              <input type="text" placeholder=" Type in password" className="password"></input>
            </div>

            <div className='home-buttons'>
            <Link to='/dashboard'>
              <button className="Login">Login</button>
            </Link>

            <button className="Register">Register</button>

            </div>

          </div>

      </div>
    )
  }
}




export default Home;
