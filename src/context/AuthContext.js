import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import movieServer from '../api/movie-server';
//import {navigate} from '../navigationRef';
import {navigate} from '../navigationRef';

//declare a reducer function that will modify users data
const authReducer = (state,action) => {
    //switch over the different action types
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'signout':
            return {errorMessage: '', token: null};
        default:
            return state
    }


};


//declare helper funtion that will automatically signin user using token stored on the device
const tryLocalSignIn = dispatch => {
    
    return async () => {
        const token = await AsyncStorage.getItem('token');

        if (token){
            dispatch({type: 'signin', token: token});
            navigate('mainFlow');
        }else{
            navigate('loginFlow');
        }
    };
};

//declare a helper function that will clear the error message
const clearErrorMessage = dispatch => {
    return () => {
        dispatch({
            type: 'clear_error_message'
        });
    };
};

//declare a helper function that will signup a new user
const signup = dispatch => {
    
    return async ({email, password}) => {
        //make an API request with email and password
        try {
            const response = await movieServer.post('/signup', {email,password});
            await AsyncStorage.setItem('token', response.data.token);
            //signup is successful, modify our state, and say that we are authenticated
            dispatch({
                type: 'signin',
                payload: response.data.token
            });
            
            //navigate to mainFlow
            navigate('mainFlow');
        }catch (err){
            console.log(err);
            dispatch({
                type: 'add_error', 
                payload: 'Something went wrong!'
            })
        }
    };
};

//declare a helper function that will signin a existing user
const signin = dispatch => {
    return async ({email, password}) => {
        try {
            const response = await movieServer.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({
                type: 'signin',
                payload: response.data.token
            })
            //navigate to mainFlow
            navigate('mainFlow');
        }catch (e) {
            console.log(e);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong!'
            })
        };
    };
};

//declare a helper function that will signout a user
const signout = dispatch => {
    
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({
            type: 'signout'
        })
        navigate('loginFlow');
        
    };
};

//export the neccessary variables and helper functions to be known across the project
export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignIn},
    {token: null, errorMessage: ''}
);