import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class Dashboard extends Component{
  constructor(props){
    super(props);

  }

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
        <h1>Dashboard Page</h1>
        <div className= 'rent-filter'>
            <Link to='/step1'>
              <button>Add New Property</button>
            </Link>

          <p>List properties with "desired rent" greator than: $</p>
          <input type='text' placeholder='0'></input>
        </div>

        <button onClick={this.serverCall}> TEST TO SERVER </button>

      </div>
    )
  }

}

export default Dashboard;
