import React, {useEffect, useState, useRef} from 'react';
import {View, Image, Animated, Button} from 'react-native';



const LoginBackground = ({run}) => {
    const transitionNum = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(false);

    const fadeIn = () => {
        //console.log('Fade In');
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(transitionNum, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }).start();
        fadeAnim.current = true;
      };
    
    const fadeOut = () => {
        //console.log('Fade Out');
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(transitionNum, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }).start();
        fadeAnim.current = false;
    };


        const timer = setInterval(() => {
            console.log(fadeAnim.current)
            if (fadeAnim.current) {
                fadeOut();
                
            } else {
                fadeIn();
                
            }
    
        }, 3000)
    
    

    return <>
    <Animated.Image
        style={{height: 300, width: 150, alignSelf: 'center', opacity: transitionNum}}
        source={require('../../assets/WonderWomen.jpg')} >
            
    </Animated.Image>
    <Button 
        title="stop"
        onPress={ () => {clearInterval(timer)}}    
    />
    </>                

};

export default LoginBackground;