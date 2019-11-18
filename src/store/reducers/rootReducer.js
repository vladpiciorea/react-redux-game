import authReducer from'./authReducer';
import scoreReducer from './scoreReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: scoreReducer,
    firebase: firebaseReducer, // sync auth
    firestore: firestoreReducer
});

export default rootReducer;