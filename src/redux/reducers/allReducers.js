import { combineReducers } from 'redux';
import message from './messageReducer';

const rootReducer = combineReducers({
    message: message,
})

export default rootReducer;