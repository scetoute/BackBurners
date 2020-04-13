import { server } from './index';
import axios from 'axios'
let axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
}

// Action Types
const SETACCTTRANSDATA = 'SETACCTTRANSDATA';
const CHANGETRANS = 'CHANGETRANS';

// Action Creators
const setAccTransData = data => ({ type: SETACCTTRANSDATA, data });
const changeTrans = transaction => ({ type: CHANGETRANS, transaction });

export const getAccTransData = () => {
    return async dispatch => {
      try {
        const res = await axios.get(`${server}/api/accTrans`);
        //dispatch(setAccTransData(res.data));
      } catch (err) {
        console.log('Error fetching acct & trans data: ', err.message);
      }
    };
};

export const updateAccTrans = newTrans => {
    return async dispatch => {
        try {
            const res = await axios.put(`${server}/api/accTrans/${newTrans.id}`, newTrans);
            //dispatch(changeTrans(res.data));
        } catch (err) {
            console.log('Error updating transaction: ', err.message);
        }
    };
};

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SETACCTTRANSDATA:
            return action.data;
        case CHANGETRANS:
            return {
                ...state,
                trans: state.trans.map(transaction => {
                    if (transaction.id === action.transaction.id) {
                        return action.transaction;
                    } else {
                        return transaction;
                    }
                }),
            };
        default:
            return state;
    }
};