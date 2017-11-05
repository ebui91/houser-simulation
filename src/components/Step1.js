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

        <div className='mid-container'>

          <div className='step-head'>
            <h2>Add new listing</h2>
            <Link to='/dashboard'>
              <button className='btn-cancel'>Cancel</button>
            </Link>
          </div>

          <div className='step-counter'>
            <p>Step 1</p>
            <div className='circle-row'>
              <img className='big-circle' src={require('./../images/big-circle.png')} alt='progress'></img>
              <img className='big-circle' src={require('./../images/big-circle.png')} alt='progress'></img>
              <img className='big-circle' src={require('./../images/big-circle.png')} alt='progress'></img>
              <img className='big-circle' src={require('./../images/big-circle.png')} alt='progress'></img>
              <img className='small-circle' src={require('./../images/small-circle.png')} alt='progress'></img>
            </div>
          </div>

          <div className='input-box'>
            <h3>Property Name</h3>
            <input className='input input-prop' type= 'text' onChange= { (e)=> { updateName(e.target.value) } }></input>
            <h3 id='prop-desc'>Property Description</h3>
            <textarea className='input input-desc' type= 'text' onChange= { (e)=> { updateDescription(e.target.value) } }></textarea>
          </div>

          <Link to='/step2'>
            <button className='btn-next' onClick= { (e)=> console.log(this.props.name, this.props.description) }>Next Step</button>
          </Link>
        </div>
     </div>
    )
  }
}

function mapStateToProps(state){
  const { name, description }= state;
  return{
    name,
    description
  };
}

export default connect(mapStateToProps, { updateName, updateDescription })(Step1);
