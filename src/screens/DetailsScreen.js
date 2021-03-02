import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import { navigate } from '../navigationRef';
import {Context as GenreContext} from '../context/GenreContext';
import Header from '../components/Header';

const {width, height} = Dimensions.get('screen');


const DetailsScreen = ({navigation}) => {
    const navigationKey = navigation.getParam('navigationKey')
    const movie = navigation.getParam('item')
    const TMDBImages = 'https://image.tmdb.org/t/p/original';
    const {state} = useContext(GenreContext)
    const movieGenres = [];
    console.log(movie)

    //figure out the genres associated with the movie, and put it into an array
    {movie.genre_ids.map((genre, index) => {
        {state.map((genres) => {
            if (genre == genres.id){
                movieGenres.push(genres.name)
            }
        })}
    })} 

    return <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        
        <Header navigationKey={navigationKey} />

        <ScrollView style={styles.details} >
            <View style={{flexDirection: 'row'}} >
                <View style={styles.imageBackground}>
                    <Image 
                        style={styles.Image}
                        source={{uri: TMDBImages + movie.poster_path}}
                    />
                </View>

                <View style={{alignItems: 'center', borderWidth: 1, borderColor: 'red', flex: 1}} >
                    
                    <Text style={[styles.Text, {fontSize: 20}]}>Title:</Text>
                    <Text style={[styles.Text , {fontSize: 10}]}>{movie.title}</Text>
                    
                    <Text style={[styles.Text, {fontSize: 20}]}>Genres:</Text>
                    <View style={{borderWidth:1, borderColor: 'red', alignItems: 'center'}} >
                        { movieGenres.map((item, key)=>(
                            <Text key={key} style={[styles.Text , {fontSize: 10}]} numberOfLines={2} > { item } </Text>)
                        )}
                    </View>
                </View>
                
            </View>
            
        </ScrollView>
    </SafeAreaView>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    details: {
        borderColor: 'red',
        borderWidth: 1,
        height,
        width,
        bottom: 40
    },
    imageBackground: {
        height: 475,
        width: 250,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        height: 450, 
        width: 225, 
        borderRadius: 10,
    },
    Text: {
        color: 'white'
    }
});

export default DetailsScreen;