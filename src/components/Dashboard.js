import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
  constructor(props){
    super(props);

  }

  //Methods
  serverCall(){
    axios.get('/api/dashboard').then(req, res, next)=>{
      console.log(res);
    }).catch(error=>console.log(error);)
  }

  render(){
    return(
      <div className= 'main-container'>
        <h1>Dashboard Page</h1>
        <div className= 'rent-filter'>
          <button>Add New Property</button>
          <p>List properties with "desired rent" greator than: $</p>
          <input type='text' placeholder='0'></input>
        </div>

        <button onClick={this.serverCall}> TEST TO SERVER </button>
        <hr>


      </div>
    )
  }

}

export default Dashboard;
