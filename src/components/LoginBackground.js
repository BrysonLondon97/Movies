import React, {useEffect, useState, useRef} from 'react';
import {View, Image, Animated, Button, StyleSheet, Dimensions} from 'react-native';
import useFade from '../hooks/useFade';




const LoginBackground = ({run}) => {
    const transitionNum1 = useFade();
    
    const screen = Dimensions.get("screen");

    const FadingImage = ({height = 200, width = 150, opacity = transitionNum}) => {
        return <Animated.Image
        style={[
          {
            width,
            height,
            opacity
          },
        ]}
        source={require('../../assets/WonderWomen.jpg')}
      />
    };


    return <View style={styles.container} >
        <FadingImage height={screen.height} width={screen.width} opacity={transitionNum1}/>
        
    </View>                

};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: -1

    }
});

export default LoginBackground;