import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import user from './user';
import thunk from 'redux-thunk';

const initialState = {};
const middleWare = [thunk];
const composeEnhancers = compose;

const reducer = combineReducers({
    user
  });

const store = createStore(reducer, 
    initialState, 
    composeEnhancers(
    applyMiddleware(
        ...middleWare),
));

export const server = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://ear-mark.herokuapp.com';
export default store;