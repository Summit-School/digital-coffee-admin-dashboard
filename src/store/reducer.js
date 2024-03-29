import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './authReducer';
import planCatsReducers from './planCatsReducers';
import plansReducer from './plansReducer';
import soundReducer from './soundReducer';
import usersReducer from './usersReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  auth: authReducer,
  planCategories: planCatsReducers,
  plans: plansReducer,
  sound: soundReducer,
  users: usersReducer
});

export default reducer;
