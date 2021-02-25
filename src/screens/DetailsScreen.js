import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import { navigate } from '../navigationRef';
import {Context as GenreContext} from '../context/GenreContext';

const {width, height} = Dimensions.get('screen');


const DetailsScreen = ({navigation}) => {
    const navigationKey = navigation.getParam('navigationKey')
    const movie = navigation.getParam('item')
    const TMDBImages = 'https://image.tmdb.org/t/p/original';
    const {genres} = useContext(GenreContext)

    console.log(genres)

    return <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <View style={styles.header} >
            <TouchableOpacity onPress={() => {navigate(navigationKey)}} >
                <Text style={styles.button}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style={styles.title} >Details</Text> 
            </TouchableOpacity>
        </View>

        <View style={styles.details} >
            <Image 
                style={{height: 500, width: 250}}
                source={{uri: TMDBImages + movie.poster_path}}
            />
        </View>
    </SafeAreaView>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        borderBottomWidth: .5,
        borderColor: 'white',
        width: width,
        height: 100,
        bottom: 40,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    button: {
        fontSize: 25,
        color: 'white',
        paddingLeft: 10,
    },
    title: {
        color: 'white',
        left: width / 2 - 110,
        fontSize: 30
    },
    details: {
        borderColor: 'red',
        borderWidth: 1,
        height,
        width,
        bottom: 40
    }
});

export default DetailsScreen;