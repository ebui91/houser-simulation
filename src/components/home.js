import React, { Component } from 'react';
import './home.css';
import { Link } from  'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div className="main-container">
        <div className='white-container'>
          <div className="houser-container">
            <img className='home-logo' src={require("../images/houser-login-logo.png")} alt="logo"></img>

            <div className="main-login">
              <p>Username</p>
              <input type="text" placeholder="Type in username" className="login"></input>
              <p>Password</p>
              <input type="text" placeholder=" Type in password" className="login"></input>
            </div>

            <div className='home-buttons'>
              <Link to='/dashboard'>
                <button className='login-btn'>Login</button>
              </Link>

              <button className='reg-btn'>Register</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default Home;
