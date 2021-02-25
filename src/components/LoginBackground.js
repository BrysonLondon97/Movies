import React, {useEffect, useContext, useRef, useState} from 'react';
import {View, Image, Animated, Button, StyleSheet, Dimensions, Text} from 'react-native';
import {Context as MoviesContext} from '../context/MoviesContext';
import useFade from '../hooks/useFade';
const TMDBImages = 'https://image.tmdb.org/t/p/original';
const {height, width} = Dimensions.get('screen');


const LoginBackground = () => {
    //grab the movies from the MoviesContext
    const {state} = useContext(MoviesContext);
    const {transitionNum, index} = useFade();

    //testing
    console.log(index)

    const FadingImage = ({height, width, opacity}) => {
      if (index != 0) {
        return <Animated.Image
        style={[
          {
            width,
            height,
            opacity,
            resizeMode: 'contain'
          },
        ]}
        source={{uri: TMDBImages + state.moviesNowPlaying[index].poster_path}}
      />
      } else {
        return null;
      }
    };

    console.log('Show Image')
    return <View style={styles.container} >
        <FadingImage height={height} width={width} opacity={transitionNum}/>
    </View>                
  
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: -1

    }
});

export default LoginBackground;