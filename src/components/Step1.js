import React, { Component } from 'react';
import './Step1.css';
import { connect } from 'react-redux';
import { updateName, updateDescription } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

class Step1 extends Component{
  render(){
    const{ updateName, updateDescription }= this.props;

    return(
      <div className='main-container'>
        <Navbar />
        <h1>Add new listing page</h1>
        <input type= 'text' placeholder='Property name...'></input>
        <input type= 'text' placeholder='Description...'></input>
        <Link to='/step2'>
          <button className='next-step'>Next Step</button>
        </Link>
     </div>
    )
  }
}

function mapStateToProps(state) {
  const { name, description }= state;
  return {
    name
  };
}

export default connect(mapStateToProps, { updateName })(Step1);
