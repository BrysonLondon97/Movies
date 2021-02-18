import TMDBGenres from '../api/TMDBGenres';
import {useContext, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {Context as MoviesContext} from '../context/MoviesContext';

const LoadingScreen = () => {
    const {tryLocalSignIn} = useContext(AuthContext);
    const {fetchMovies, state} = useContext(MoviesContext);

    useEffect(() =>{
        tryLocalSignIn();
        fetchMovies();
    }, []);

    //console.log(state);

    return null;
};

const styles = StyleSheet.create({});

export default LoadingScreen;