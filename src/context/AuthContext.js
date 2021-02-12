import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import movieServer from '../api/movie-server';
//import {navigate} from '../navigationRef';
import { useNavigation } from '@react-navigation/native';

//declare a reducer function that will modify users data
const authReducer = (state,action) => {
    //switch over the different action types
    switch (action.type) {
        case 'add_error':
        case 'clear_error_message':
        case 'signin':
        case 'signout':
        default:
            return state
    }


};


//declare helper funtion that will automatically signin user using token stored on the device
const tryLocalSignIn = dispatch => {
    
};

//declare a helper function that will clear the error message
const clearErrorMessage = dispatch => {

};

//declare a helper function that will signup a new user
const signup = dispatch => {

};

//declare a helper function that will signin a existing user
const signin = dispatch => {

};

//declare a helper function that will signout a user
const signout = dispatch => {

};

//export the neccessary variables and helper functions to be known across the project
export const {Provider,Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignIn},
    {token: null, errorMessage: ''}
);