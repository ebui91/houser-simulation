import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class Step2 extends Component {
  render(){
    return(
      <div className="main-container">
        <Navbar />
        <h1>Add new listing</h1>
        <h2>Step 2</h2>
        <button className="cancelButton">Cancel</button>
        <input type="text" className="Address" placeholder="Add Address"></input>
        <input type="text" className="City" placeholder="Add City"></input>
        <input type="text" className="Zip" placeholder="Add Zip"></input>
        <input type="text" className="State" placeholder="Add State"></input>

        <Link to='/step1'>
          <button className="previous-step"> Previous Step </button>
        </Link>

        <button className="next-step"> Next Step </button>
      </div>
    )
  }
}
export default Step2;
