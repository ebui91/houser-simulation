import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { updateRent } from '../ducks/reducer';
import axios from 'axios';
import './Step5.css';

class Step5 extends Component{
  render(){
    const { updateRent }= this.props;
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
            <p>Step 5</p>
            <div className='circle-row'>
              <img className='big-circle'src={require('./../images/small-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
            </div>
          </div>

          <h3>Recommended Rent</h3>

          <div className='input-box'>
            <h3>Desired Rent</h3>
            <input type='text' className='input input-rent' placeholder='$' onChange={ (e)=> updateRent(e.target.value) }></input>
          </div>

          <Link to='/step3'>
            <button className="btn btn-prev"> Previous Step </button>
          </Link>

          <Link to='/dashboard'>
            <button className="btn btn-complete" onClick= { (e)=> console.log(
                this.props.name,
                this.props.description,
                this.props.loan_amount,
                this.props.monthly_mortgage,
                this.props.desired_rent,
                this.props.address_line,
                this.props.city,
                this.props.state2,
                this.props.zip,
                this.props.img_url) }> Complete </button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {
    name,
    description,
    loan_amount,
    monthly_mortgage,
    desired_rent,
    address_line,
    city,
    state2,
    zip,
    img_url
  }= state;

  return{
    name,
    description,
    loan_amount,
    monthly_mortgage,
    desired_rent,
    address_line,
    city,
    state2,
    zip,
    img_url
  }
}

export default connect(mapStateToProps, { updateRent })(Step5);
