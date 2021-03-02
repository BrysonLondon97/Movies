import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import TMDBGenres from '../api/TMDBGenres';
//import {navigate} from '../navigationRef';

//declare a reducer function that will modify users data
const authReducer = (state,action) => {
    //console.log(action.payload.genres)
    //switch over the different action types
    switch (action.type) {
        case 'add_genre':
            return action.payload.genres
        default:
            return state
    }


};

//declare a helper function that will signup a new user
const fetchGenres = dispatch => {
    //create a abort controller to cleanup API calls
    const myAbortController = new AbortController();

    return async () => {
        try{
            const response = await TMDBGenres.get()
            dispatch({
                type: 'add_genre',
                payload: response.data
            })
            myAbortController.abort();
        } catch (e) {
            console.log(e)
        }
        
    }
};

//export the neccessary variables and helper functions to be known across the project
export const {Provider,Context} = createDataContext(
    authReducer,
    {fetchGenres},
    []
);