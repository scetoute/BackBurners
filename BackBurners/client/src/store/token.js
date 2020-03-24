import { server } from './index';
import axios from 'axios'
// Action Types
const SENDPUBLICTOK = 'SENDPUBLICTOK';

// Action Creators
const sendPublicToken = token => ({ type: SENDPUBLICTOK, token });

export const sendToken = token => {
  return async dispatch => {
    try {
        const resp = await axios.post(`${server}/api/plaid/plaid_exchange`,{public_token: token})
        dispatch(sendPublicToken(resp.data));
    } catch (err) {
      console.log('Error sending public token: ', err.message);
    }
  };
};

const initialToken = [];

export default (state = initialToken, action) => {
  switch (action.type) {
    case SENDPUBLICTOK:
      return action.token;
    default:
      return state;
  }
};