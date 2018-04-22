import { combineReducers } from 'redux';
import CryptoReducer from './cryptoReducer';

export default combineReducers({
    crypto: CryptoReducer
});