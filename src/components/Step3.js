import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { updateURL } from '../ducks/reducer';
import './Step3.css'

class Step3 extends Component{
  render(){
    const { updateURL }= this.props;
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
            <p>Step 3</p>
            <div className='circle-row'>
              <img className='big-circle'src={require('./../images/big-circle.png')} alt='circle'></img>
              <img className='big-circle'src={require('./../images/big-circle.png')} alt='circle'></img>
              <img className='big-circle'src={require('./../images/small-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
            </div>
          </div>

          <div className='img-container'></div>

          <div className='input-box'>
            <h3>Image URL</h3>
            <input type='text' className='input input-URL' placeholder='http://' onChange={ (e)=> updateURL(e.target.value) }></input>
          </div>

          <Link to='/step2'>
            <button className="btn btn-prev"> Previous Step </button>
          </Link>

          <Link to='/step4'>
            <button className="btn btn-next" onClick= { (e)=> console.log(this.props.img_url) }> Next Step </button>
          </Link>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state){
  const { img_url }= state;
  return{
    img_url
  };
}

export default connect(mapStateToProps, { updateURL })(Step3);
