const initialState= {
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

//ACTION TYPES
const UPDATE_NAME= 'UPDATE_NAME';
const UPDATE_DESC= 'UPDATE_DESC';

//REDUCER
function reducer(state=initialState, action){
  switch(action.type){
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    case UPDATE_DESC:
      return Object.assign({}, state, { desc: action.payload });
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

export function updateDescription(desc){
  return{
    type: UPDATE_DESC,
    payload: desc
  }
};


export default reducer;
