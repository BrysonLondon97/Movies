import React,{useRef, useState, useEffect} from 'react';
import {Text, StyleSheet, View, Animated, Dimensions, Easing} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import LoginBackground from '../components/LoginBackground';
import TMDBImages from '../api/TMDBImages';


const screen = Dimensions.get("screen");

const Signin = ({navigation}) => {

    //create a variable that tracks the movement of the content
    const screenHeight = useRef(screen.height).current;
    const transitionNum = useRef(new Animated.Value(screenHeight/2 + 100)).current;
    const toggle = useRef(true);

    //create a animated function that transitions content upwards
    const transition = () => {

        // Will change fadeAnim value to 1 in 5 seconds
        if (toggle.current){
            Animated.timing(transitionNum, {
                toValue: screenHeight,
                duration: 1000,
                useNativeDriver: false,
                
            }).start();
            toggle.current = (!toggle.current)
        }   
        else {
            Animated.timing(transitionNum, {
                toValue: screenHeight/2 + 100,
                duration: 1000,
                useNativeDriver: false,
                
            }).start();
            toggle.current = (!toggle.current)
        }
        
        

    };




    return <SafeAreaView style={styles.background} forceInset={{top: 'always'}}>
            <Button 
                //style={{height: 10}}
                title='Transition'
                onPress={ () => {
                    transition()
                }}
                
                
            />
            <LoginBackground 
                
            />
            <Animated.View style={[styles.container, {top: transitionNum}]}>
                <Text style={[styles.text]}>Welcome</Text>
            </Animated.View>
        </SafeAreaView>

};

const styles = StyleSheet.create({
    container: {
        height: 1000,
        width: screen.width,
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 45,
        //justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
    },
    background: {
        backgroundColor: 'black',
        flex: 1
    }
});

export default Signin;