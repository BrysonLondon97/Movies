import React, {useEffect, useContext, useRef, useState} from 'react';
import {View, Image, Animated, Button, StyleSheet, Dimensions} from 'react-native';
import {Context as MoviesContext} from '../context/MoviesContext';
const TMDBImages = 'https://image.tmdb.org/t/p/original';
const {height, width} = Dimensions.get('screen');


const LoginBackground = ({run}) => {
    const {state} = useContext(MoviesContext);
    
    const [index, setIndex] = useState('');

    useEffect(() => {
      setIndex(Math.floor(Math.random() * state.moviesNowPlaying.length))
    }, [])

    console.log([Math.floor(Math.random() * state.moviesNowPlaying.length)])

    const useFade = (startDelay = 500) => {
      const transitionNum = useRef(new Animated.Value(0)).current;
  
      const pulse = () => {
          Animated.sequence([
              Animated.timing(transitionNum, { toValue: 1, useNativeDriver: false, duration: 3000}),
              Animated.timing(transitionNum, { toValue: 0, useNativeDriver: false, duration: 3000}),
          ]).start(() => pulse());
          //grab new pho
          setIndex(Math.floor(Math.random() * state.moviesNowPlaying.length))
      };
  
      useEffect(() => {
          const timeout = setTimeout(() => pulse(), startDelay);
          return () => clearTimeout(timeout);
      }, []);
  
      return transitionNum;
  };


  const transitionNum1 = useFade();

    const FadingImage = ({height, width, opacity = transitionNum}) => {
      console.log(index);
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

    return <View style={styles.container} >
        <FadingImage height={height} width={width} opacity={transitionNum1}/>
        
    </View>                

};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: -1

    }
});

export default LoginBackground;