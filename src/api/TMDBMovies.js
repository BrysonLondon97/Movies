import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
});

export default instance;