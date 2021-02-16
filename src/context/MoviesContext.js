import createDataContext from '../context/createDataContext';
import TMDBMovies from '../api/TMDBMovies';

const movieReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_NowPlaying':
            //console.log(action.payload.results)
            return {...state, moviesNowPlaying: action.payload.results}
        case 'fetch_Popular':
            //console.log(action.payload.results)
            return {...state, moviesPopular: action.payload.results}
        case 'fetch_TopRated':
            //console.log(action.payload.results)
            return {...state, moviesTopRated: action.payload.results}
        case 'fetch_Upcoming':
            //console.log(action.payload.results)
            return {...state, moviesUpcoming: action.payload.results}
        case 'clear_movies':
            return {moviesNowPlaying: [], moviesPopular: [], moviesTopRated: [], moviesUpcoming: []}
        default:
            return state;
    }
};

const fetchMovies = (dispatch) => {


    return async () => {
        console.log('Fetch')
    
        //go through 5 try catch statements to fetch all movies
        //grab NowPlaying Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/now_playing');
            dispatch({type: 'fetch_NowPlaying', payload: response.data});
            //console.log(e);
        } catch (e) {
            console.log(e)
        }

        //grab Popular Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/popular');
            dispatch({type: 'fetch_Popular', payload: response.data});
            //console.log(e);
        } catch (e) {
            console.log(e)
        }

        //grab TopRated Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/top_rated');
            dispatch({type: 'fetch_TopRated', payload: response.data});
            //console.log(e);
        } catch (e) {
            console.log(e)
        }

        //grab Popular Movies
        try {
            //make a variable to set the response of the API to
            const response = await TMDBMovies.get('/upcoming');
            dispatch({type: 'fetch_Upcoming', payload: response.data});
            //console.log(e);
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