import { server } from './index';
import axios from 'axios';
//ACTION TYPES
const GETUSER = 'GETUSER';
const DELETEUSER = 'DELETEUSER';

let axiosConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
}
//ACTION FUNCTIONS
const getUser = userId => ({ type: GETUSER, userId });
const deleteUser = () => ({ type: DELETEUSER });

//  THUNK CREATOR ACTIONS

export const signup = (userObject) => dispatch => {
  axios.post(`${server}/auth/signup`, userObject, axiosConfig).then(r => {
    alert(r)
    //dispatch(getUser(r.data))
  })
}

export const login = (email, passWord) => dispatch => {
  axios.post(`${server}/auth/login`, {email, passWord}).then(r => {
    dispatch(getUser(r.data))
  })
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