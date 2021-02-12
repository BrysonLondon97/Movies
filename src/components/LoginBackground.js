import React, {useEffect, useState, useRef} from 'react';
import {View, Image, Animated, Button, StyleSheet, Dimensions} from 'react-native';
import useFade from '../hooks/useFade';

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


const LoginBackground = ({run}) => {
    const transitionNum1 = useFade();
    const transitionNum2 = useFade(141);
    const transitionNum3 = useFade(269);
    const transitionNum4 = useFade(235);
    const transitionNum5 = useFade(689);
    const transitionNum6 = useFade(445);
    const transitionNum7 = useFade(329);
    const transitionNum8 = useFade(790);
    const transitionNum9 = useFade(100);
    const screen = Dimensions.get("screen");

    return <View style={styles.container} >
    <View style={styles.row} >
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum1}/>
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum2}/>
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum3}/>
    </View>
    <View style={styles.row} >
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum4}/>
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum5}/>
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum6}/>
    </View>
    <View style={styles.row} >
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum7}/>
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum8}/>
       <FadingImage height={screen.height/3} width={screen.width/3} opacity={transitionNum9}/>
    </View>
    </View>                

};

const styles = StyleSheet.create({
    row: {
        //flex: 1, 
        borderColor: 'red',
        borderWidth: 1,
        flexDirection: 'row',
    },
    container: {
        position: 'absolute',
        zIndex: -1

    }
});

export default LoginBackground;