const initialState= {
  name: '',
  description: '',
  loan_amount: 0,
  monthly_mortgage: 0,
  desired_rent: 0,
  address_line: '',
  city: '',
  state2: '',
  zip: 0,
  img_url: ''
}

//ACTION TYPES
const UPDATE_NAME= 'UPDATE_NAME';
const UPDATE_DESC= 'UPDATE_DESC';
const UPDATE_ADDRESS= 'UPDATE_ADDRESS';
const UPDATE_CITY= 'UPDATE_CITY';
const UPDATE_STATE= 'UPDATE_STATE';
const UPDATE_ZIP= 'UPDATE_ZIP';
const UPDATE_URL= 'UPDATE_URL'
const UPDATE_LOAN= 'UPDATE_LOAN';
const UPDATE_MORTGAGE= 'UPDATE_MORTGAGE';
const UPDATE_RENT= 'UPDATE_RENT';

//REDUCER
function reducer(state=initialState, action){
  switch(action.type){
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    case UPDATE_DESC:
      return Object.assign({}, state, { description: action.payload });
    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_STATE:
      return Object.assign({}, state, { state2: action.payload });
    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: action.payload });
    case UPDATE_URL:
      return Object.assign({}, state, { img_url: action.payload });
    case UPDATE_LOAN:
      return Object.assign({}, state, { loan_amount: action.payload });
    case UPDATE_MORTGAGE:
      return Object.assign({}, state, { monthly_mortgage: action.payload });
    case UPDATE_RENT:
      return Object.assign({}, state, { desired_rent: action.payload });
    default:
      return state;
  }
}

//ACTION CREATORS
export function updateName(name){
  return{
    type: UPDATE_NAME,
    payload: name
  }
};

export function updateDescription(description){
  return{
    type: UPDATE_DESC,
    payload: description
  }
};

export function updateAddress(address){
  return{
    type: UPDATE_ADDRESS,
    payload: address
  }
};

export function updateState(state){
  return{
    type: UPDATE_STATE,
    payload: state
  }
};

export function updateCity(city){
  return{
    type: UPDATE_CITY,
    payload: city
  }
};

export function updateZip(zip){
  return{
    type: UPDATE_ZIP,
    payload: zip
  }
};

export function updateURL(url){
  return {
    type: UPDATE_URL,
    payload: url
  }
};

export function updateLoan(loan){
  return{
    type: UPDATE_LOAN,
    payload: loan
  }
};

export function updateMortgage(mortgage){
  return{
    type: UPDATE_MORTGAGE,
    payload: mortgage
  }
};

export function updateRent(rent){
  return{
    type: UPDATE_RENT,
    payload: rent
  }
};


export default reducer;
