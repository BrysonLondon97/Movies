import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {Context as MoviesContext} from '../context/MoviesContext';
import {SafeAreaView} from 'react-navigation';
const TMDBImages = 'https://image.tmdb.org/t/p/original';


const ExploreScreen = () => {
    const {fetchMovies, state} = useContext(MoviesContext);

    console.log(TMDBImages);
    
    

    return <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={{color: 'white'}}>{state.moviesPopular[19].title}</Text>
        <Image 
            style={{height: 150, width: 150, borderRadius: 5, borderColor: 'red'}}
            source={{uri: TMDBImages + state.moviesPopular[19].poster_path}}
            PlaceholderContent={<ActivityIndicator />}
        />
    </SafeAreaView>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    }
});

export default ExploreScreen;