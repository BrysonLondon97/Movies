import React,{useRef, useState} from 'react';
import {Text, StyleSheet, View, Animated, Dimensions, Easing} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import LoginBackground from '../components/LoginBackground';

const screen = Dimensions.get("screen");

const Signin = ({navigation}) => {
    
    

    //create a variable that tracks the movement of the content
    const screenHeight = useRef(screen.height).current;
    const transitionNum = useRef(new Animated.Value(screenHeight/2 + 200)).current;
    const toggle = useRef(true);

    //create a animated function that transitions content upwards
    const transition = () => {
        //console.log(transitionNum)
        // Will change fadeAnim value to 1 in 5 seconds
        
        if (toggle){
            Animated.timing(transitionNum, {
                toValue: screenHeight,
                duration: 1000,
                useNativeDriver: false,
                
            }).start();
        }
        else {
            Animated.timing(transitionNum, {
                toValue: screenHeight/2 + 200,
                duration: 1000,
                useNativeDriver: false,
                Easing: 'bounce'
            }).start();
        }
        
        

    };



    return <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Sign in</Text>
            <Button 
                //style={{height: 10}}
                title='Sign Up'
                onPress={ () => {navigation.navigate('Signup')}}
            />
            <Button 
                //style={{height: 10}}
                title='Transition'
                onPress={ () => {
                    if (toggle){
                        toggle.current = false
                    }else{
                        toggle.current = true
                    }
                    transition()
                }}
            />
            <LoginBackground 
                run = {toggle.current}
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
        backgroundColor: 'red',
        position: 'absolute',
        borderRadius: 45,
        //justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
    }
});

export default Signin;