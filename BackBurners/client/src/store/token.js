import { server } from './index';
import axios from 'axios'
// Action Types
const SENDPUBLICTOK = 'SENDPUBLICTOK';

// Action Creators
const sendPublicToken = token => ({ type: SENDPUBLICTOK, token });

let axiosConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
}

export const sendTok = token => {
  return async dispatch => {
    try {
      const resp = await axios.post(`${server}/api/plaid/plaidExchange`,{public_token: token}, axiosConfig)
      console.log(resp)
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