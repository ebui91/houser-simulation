import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeListing.css';

class HomeListing extends Component{
  render(){
    return(
      <div className='hl-card'>

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
    recommended_rent,
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
    recommended_rent,
    desired_rent,
    address_line,
    city,
    state2,
    zip,
    img_url
  }
}
export default connect(mapStateToProps)(HomeListing);
