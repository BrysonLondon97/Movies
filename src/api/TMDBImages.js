import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
    baseURL: 'https://image.tmdb.org/t/p'
});

export default instance;