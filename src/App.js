import React, { Component } from 'react';
import router from './router';
import './App.css';
import Home from './components/home.js';



class App extends Component {
  constructor(){
    super();

    this.state= {
      name: '',
      description: '',
      loan_amount: 0,
      monthly_mortgage: 0,
      recommended_rent: 0,
      desired_rent: 0,
      address_line: '',
      city: '',
      state: '',
      zip: 0
    }
  //Binds

  }

  //Methods


  render() {
    return (
      <div className="App">
        <h1> App Page </h1>
        { router }
      </div>
    );
  }
}

export default App;
