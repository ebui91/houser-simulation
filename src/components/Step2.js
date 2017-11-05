import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { updateAddress, updateCity, updateZip, updateState } from '../ducks/reducer';
import './Step2.css';

class Step2 extends Component {
  render(){
    return(
      <div className="main-container">
        <Navbar />

        <div className='mid-container'>
          <div className='step-head'>
            <h2>Add new listing</h2>
            <Link to='/dashboard'>
              <button className='btn-cancel'>Cancel</button>
            </Link>
          </div>

          <div className='step-counter'>
            <p>Step 2</p>
            <div className='circle-row'>
              <img className='big-circle'src={require('./../images/big-circle.png')} alt='circle'></img>
              <img className='big-circle'src={require('./../images/big-circle.png')} alt='circle'></img>
              <img className='big-circle'src={require('./../images/big-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/small-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
            </div>
          </div>

          <div className='input-box'>
            <h3>Address</h3>
            <input type="text" className="input input-address" onChange={ (e)=> this.props.updateAddress(e.target.value) }></input>
            <h3>City</h3>
            <input type="text" className="input input-city" onChange={ (e)=> this.props.updateCity(e.target.value) }></input>
            <h3>Zip</h3>
            <input type="text" className="input input-zip" onChange={ (e)=> this.props.updateZip(e.target.value) }></input>
            <h3>State</h3>
            <input type="text" className="input input-state" onChange={ (e)=> this.props.updateState(e.target.value) }></input>
          </div>

            <Link to='/step1'>
              <button className="btn btn-prev"> Previous Step </button>
            </Link>

            <Link to='/step3'>
              <button className="btn btn-next" onClick={ (e)=> console.log(this.props.address, this.props.city, this.props.zip, this.props.state2) }> Next Step </button>
            </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { address, city, zip, state2 }= state;
  return{
    address,
    city,
    zip,
    state2
  };
}

export default connect(mapStateToProps, { updateAddress, updateCity, updateZip, updateState })(Step2);
