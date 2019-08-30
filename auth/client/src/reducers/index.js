import auth from './auth';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

export default combineReducers({
    auth,
    form: formReducer
});