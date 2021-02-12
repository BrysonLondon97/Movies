import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import movieServer from '../api/movie-server';
//import {navigate} from '../navigationRef';

//declare a reducer function that will modify users data
const authReducer = (state,action) => {
    //switch over the different action types
    switch (action.type) {
        case 'add_genre':
        default:
            return state
    }


};

//declare a helper function that will signup a new user
const addGenre = dispatch => {

};

//export the neccessary variables and helper functions to be known across the project
export const {Provider,Context} = createDataContext(
    authReducer,
    {addGenre},
    {genres: []}
);