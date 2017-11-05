import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
      <div className='nav-container'>
        <div className='nav-left'>
          <Link to='/dashboard'>
            <img className='nav-logo' src={require('../images/houser-nav-logo.png')} alt='houser logo'></img>
          </Link>
          <p><span className='bold-text'>Houser</span> Dashboard</p>
        </div>

        <Link  className='nav-right' to='/'>
          <p>Logout</p>
        </Link>
      </div>
    )
  }
}

export default Navbar;
