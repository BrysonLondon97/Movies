import createDataContext from '../context/createDataContext';
import TMDBMovies from '../api/TMDBMovies';

const movieReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_NowPlaying':
            return {...state, moviesNowPlaying: action.payload.results}
        case 'fetch_Popular':
            return {...state, moviesPopular: action.payload.results}
        case 'fetch_TopRated':
            return {...state, moviesTopRated: action.payload.results}
        case 'fetch_Upcoming':
            return {...state, moviesUpcoming: action.payload.results}
        case 'clear_movies':
            return {moviesNowPlaying: [], moviesPopular: [], moviesTopRated: [], moviesUpcoming: []}
        default:
            return state;
    }
};

const fetchMovies = (dispatch) => {
    //create a abort controller to cleanup API calls
    const myAbortController = new AbortController();

    return async () => {
        //go through 5 try catch statements to fetch all movies
        //grab NowPlaying Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/now_playing', {signal: myAbortController.signal});
            dispatch({type: 'fetch_NowPlaying', payload: response.data});
            myAbortController.abort();
        } catch (e) {
            console.log(e)
        }

        //grab Popular Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/popular', {signal: myAbortController.signal});
            dispatch({type: 'fetch_Popular', payload: response.data});
            myAbortController.abort();
        } catch (e) {
            console.log(e)
        }

        //grab TopRated Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/top_rated', {signal: myAbortController.signal});
            dispatch({type: 'fetch_TopRated', payload: response.data});
            myAbortController.abort();
        } catch (e) {
            console.log(e)
        }

        //grab Popular Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/upcoming', {signal: myAbortController.signal});
            dispatch({type: 'fetch_Upcoming', payload: response.data});
            myAbortController.abort();
        } catch (e) {
            console.log(e)
        }
    };
};

export const {Context, Provider} = createDataContext(
    movieReducer,
    {fetchMovies},
    {moviesNowPlaying: [], moviesPopular: [], moviesTopRated: [], moviesUpcoming: []}
)