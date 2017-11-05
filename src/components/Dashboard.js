import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import HomeListing from './HomeListing';
import './Dashboard.css';

class Dashboard extends Component{
  //Methods
  // serverCall(){
  //   axios.get('/api/dashboard').then((req, res, next)=>{
  //     console.log(res);
  //   })
  // }

  render(){
    return(
      <div className= 'main-container'>
        <Navbar />

        <div className= 'rent-filter'>
            <Link to='/step1'>
              <button className='new-prop-btn'>Add New Property</button>
            </Link>

            <div className='filter-box'>
              <p>List properties with "desired rent" greator than: $</p>
              <input className='rent-input' type='text' placeholder='0'></input>
              <button className='btn btn-filter'>Filter</button>
              <button className='btn btn-reset'>Reset</button>
            </div>
            <hr/>

            <div className='home-list'>
              <h2>Home Listings</h2>
              <HomeListing />
              <HomeListing />
              <HomeListing />
            </div>
        </div>
      </div>
    )
  }

}

export default Dashboard;
