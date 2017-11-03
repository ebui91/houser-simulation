import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
  constructor(props){
    super(props);

  }

  //Methods
  serverCall(){
    axios.get('/api/dashboard', (req, res, next)=>{
      console.log(res);
    })
  }

  render(){
    return(
      <div className= 'main-container'>
        Dashboard Page!
        <button onClick={this.serverCall}> TEST TO SERVER </button>
      </div>
    )
  }

}

export default Dashboard;
