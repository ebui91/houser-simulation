import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { updateLoan, updateMortgage } from '../ducks/reducer';
//import CSS file

class Step4 extends Component{
  render(){
    const{ updateLoan, updateMortgage }= this.props;
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
            <p>Step 4</p>
            <div className='circle-row'>
              <img className='big-circle'src={require('./../images/big-circle.png')} alt='circle'></img>
              <img className='big-circle'src={require('./../images/small-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
              <img className='small-circle'src={require('./../images/completed-circle.png')} alt='circle'></img>
            </div>
          </div>

          <div className='input-box'>
            <h3>Loan Amount</h3>
            <input type='text' className='input input-loan' placeholder='$' onChange={ (e)=> updateLoan(e.target.value) }></input>

            <h3>Monthly Mortgage</h3>
            <input type='text' className='input input-loan' placeholder='$' onChange={ (e)=> updateMortgage(e.target.value) }></input>
          </div>

          <Link to='/step3'>
            <button className="btn btn-prev"> Previous Step </button>
          </Link>

          <Link to='/step5'>
            <button className="btn btn-next" onClick= { (e)=> console.log(this.props.loan_amount, this.props.monthly_mortgage) }> Next Step </button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { loan_amount, monthly_mortgage }= state;
  return{
    loan_amount,
    monthly_mortgage
  };
}

export default connect(mapStateToProps, { updateLoan, updateMortgage })(Step4);
