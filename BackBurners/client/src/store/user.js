import { server } from './index';
import axios from 'axios'
//ACTION TYPES
const GETUSER = 'GETUSER';
const DELETEUSER = 'DELETEUSER';

//ACTION FUNCTIONS
const getUser = userId => ({ type: GETUSER, userId });
const deleteUser = () => ({ type: DELETEUSER });

//  THUNK CREATOR ACTIONS

export const signup = (username, passWord) => dispatch => {

}


//REDUCER

export default (state = {}, action) => {
    switch (action.type) {
      case GETUSER:
        return action.user;
      case DELETEUSER:
        return {};
      default:
        return state;
    }
  }