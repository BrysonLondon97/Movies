import React, {useRef, useContext, useEffect, useState} from 'react';
import {FlatList, Animated, Text, View, Image, Dimensions, StyleSheet} from 'react-native'
import {Context as MoviesContext} from '../context/MoviesContext';

const {width, height} = Dimensions.get('screen');
const ITEM_SIZE = width * 0.5;
const SPACING = 10;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const TMDBImages = 'https://image.tmdb.org/t/p/original';

const MoviesFlatList = ({data}) => {
    const scrollX = useRef(new Animated.Value(0)).current
    const {state} = useContext(MoviesContext);    
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        switch (data){
            case 'Now_Playing':
                return setMovies([ {id: 24412}, ...state.moviesNowPlaying , {id: 992919} ]); 
            case 'Popular':
                return setMovies([ {id: 24412}, ...state.moviesPopular , {id: 992919} ]); 
            case 'Top_Rated':
                return setMovies([ {id: 24412}, ...state.moviesTopRated , {id: 992919} ]); 
            case 'Upcoming':
                return setMovies([ {id: 24412}, ...state.moviesUpcoming , {id: 992919} ]);
            default:
                return null
        } 
     }, [])

    return <Animated.FlatList
            showsHorizontalScrollIndicator = {false}
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            snapToInterval = {ITEM_SIZE}
            snapToAlignment= 'start'
            decelerationRate={0.5}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
            contentContainerStyle={{ alignItems: 'center' }}
            renderItem = {({index, item}) => {

                if (!item.poster_path) {
                    return <View style={{ width: EMPTY_ITEM_SIZE , backgroundColor: 'red'}} />;
                }

                const inputRange = [
                    (index - 2) * ITEM_SIZE,
                    (index - 1) * ITEM_SIZE ,
                    index * ITEM_SIZE ,
                    
                  ];
                
                const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, -25, 0],
                  });


                return (
                    <View style={{width: ITEM_SIZE}}>
                        <Animated.View style={[styles.posterBackground, {transform: [{translateY}]}]}>
                            <Image 
                                style={styles.Image}
                                source={{uri: TMDBImages + item.poster_path}}
                            />
                            <Text style={{fontSize: 24}} numberOfLines={1}>{item.title}</Text>
                        </Animated.View>
                    </View >
                );
            }}
        />
};

const styles = StyleSheet.create({
    posterBackground: {
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'white',
        marginHorizontal: SPACING,
        padding: 20
    },
    Image: {
        borderRadius: 10,
        height: ITEM_SIZE * 1.0,
        width: '100%',
        margin: 0,
        marginBottom: 10

    }
});

export default MoviesFlatList;