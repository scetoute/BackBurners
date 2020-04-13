import { server } from './index';
import axios from 'axios'
let axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
}

// Action Types
const GETBUDGET = 'GETBUDGET';
const UPDATEBUDGET = 'UPDATEBUDGET';

// Action Creators
const getBudgetCreator = budget => ({ type: GETBUDGET, budget });
const updateBudgetCreator = budget => ({ type: UPDATEBUDGET, budget });

export const getBudget = userId => {
  return async dispatch => {
    try {
      const resp = await axios.post(`${server}/api/budget/${userId}`,{public_token: token}, axiosConfig)
      console.log("get budget", resp.data)
      //dispatch(getBudgetCreator(resp.data))
    } catch(err) {
      console.log('Error getting budget: ', err.message);
    }
  }
}

export const updateBudget = budget => {
  return async dispatch => {
  try {
      const resp = await axios.post(`${server}/api/budget`, {budget: budget}, axiosConfig)
      console.log("update budget", resp.data)
      //dispatch(updateBudgetCreator(resp.data))
    } catch(err) {
      console.log('Error updating budget: ', err.message);
    }
  }
}

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETBUDGET:
      return action.budget;
    case UPDATEBUDGET:
      return action.budget;
    default:
      return state;
  }
};