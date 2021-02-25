import TMDBGenres from '../api/TMDBGenres';
import {useContext, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {Context as MoviesContext} from '../context/MoviesContext';
import {Context as GenreContext} from '../context/GenreContext';

const LoadingScreen = () => {
    const {tryLocalSignIn} = useContext(AuthContext);
    const {fetchMovies} = useContext(MoviesContext);
    const {fetchGenres} = useContext(GenreContext);

    useEffect(() =>{
        tryLocalSignIn();
        fetchMovies();
        fetchGenres();
    }, []);

    //console.log(state);

    return null;
};

const styles = StyleSheet.create({});

export default LoadingScreen;