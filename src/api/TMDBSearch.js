import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=985ab33620858484c8fdcbde0c0ed53e&language=en-US&query=',
    
});

export default instance;