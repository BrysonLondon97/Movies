import React, {useRef, useContext, useState} from 'react';
import {Text, StyleSheet, Animated, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button, Input} from 'react-native-elements';
import LoginBackground from '../components/LoginBackground';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import {Context as AuthContext} from '../context/AuthContext';

//get the dimensions of the screen
const screen = Dimensions.get("screen");

const Signin = ({navigation}) => {
    //create a variable that tracks the movement of the content
    const transitionContainer = useRef(new Animated.Value(screen.height)).current;
    const transitionIconY = useRef(new Animated.Value(30)).current;
    const transitionIcon = useRef(new Animated.Value(3.15)).current;
    const toggle = useRef(true);

    //bring in the context variable
    const {state, signin} = useContext(AuthContext);

    //create a state variable for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //create a animated function that transitions content upwards
    const transition = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        if (toggle.current){
            Animated.parallel([
                Animated.timing(transitionContainer, {
                    toValue: screen.height/2 + 80,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(transitionIconY, {
                    toValue: screen.height/2 - 100,
                    duration: 1000,
                    useNativeDriver: false
                }),
                Animated.timing(transitionIcon, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false
                })
                
            ]).start()
            toggle.current = (!toggle.current)
        }   
        else {
            Animated.parallel([
                Animated.timing(transitionContainer, {
                    toValue: screen.height,
                    duration: 1000,
                    useNativeDriver: false,
                    
                }),
                Animated.timing(transitionIconY, {
                    toValue: 30,
                    duration: 1000,
                    useNativeDriver: false
                }),
                Animated.timing(transitionIcon, {
                    toValue: 3.15,
                    duration: 1000,
                    useNativeDriver: false
                })
                
            ]).start();
            toggle.current = (!toggle.current)
        }
        
    
    };

    


    return <SafeAreaView style={styles.background} forceInset={{top: 'always'}}>
            
        <LoginBackground />

        <Animated.View style={{top: transitionIconY, transform: [{rotate: transitionIcon}], alignSelf: 'center' }}>
            <TouchableOpacity onPress={ () => {transition()}}>
                <Feather name="arrow-up" size={50} color="white" />
            </TouchableOpacity> 
        </Animated.View>

        <Animated.View style={[styles.container, {bottom: transitionContainer}]}>
            <MaterialIcons name="local-movies" size={75} color="white" style={{alignSelf: 'center', top: 0}}/>
            <Input 
                placeholder= 'email@address.com'
                leftIcon={
                    <Feather name="mail" size={24} color="black" />
                }
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize = 'none'
                autoCorrect = {false}
            />
            <Input 
                placeholder= '*********'
                leftIcon={
                    <Feather name="lock" size={24} color="black" />
                }
                label='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}

            />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Button 
                title= 'Sign In'
                raised
                onPress={() => {signin({email,password})}}
            />
            <Text style={styles.text}>Dont have an account?</Text>
            <TouchableOpacity onPress={ () => {navigation.navigate('Signup')}}>
                <Text style={{alignSelf: 'center', fontFamily: 'Helvetica', fontSize: 12, color: 'blue'}} >Sign Up</Text>
            </TouchableOpacity>
                
        </Animated.View>
    </SafeAreaView>

};

const styles = StyleSheet.create({
    container: {
        height: 350,
        width: screen.width,
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 45,
        //justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 15,
        fontFamily: 'Helvetica'
    },
    background: {
        backgroundColor: 'black',
        flex: 1
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    }
});

export default Signin;