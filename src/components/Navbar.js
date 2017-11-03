import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
      <div className='nav-container'>
        <div className='nav-left'>
          <img className='nav-logo' src='../logo.jpg'></img>
          <p>Houser Dashboard</p>
        </div>

        <Link  className='nav-right' to='/'>
          <p>Logout</p>
        </Link>
      </div>
    )
  }
}

export default Navbar;
