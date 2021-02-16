import React, {useContext, useState} from 'react';
import {Text, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button, Input} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import {Context as AuthContext} from '../context/AuthContext';

const screen = Dimensions.get("screen");

const Signup = ({navigation}) => {

    //bring in the context variable
    const {state, signup} = useContext(AuthContext);

    //create a state variable for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return <SafeAreaView forceInset={{top: 'always'}} style={styles.background}>
        <View style={styles.container}>
            <LinearGradient colors={['red', 'blue']} style={{flex: 1, borderRadius: 20}} >
                <View style={{flex: 1, backgroundColor: 'white', borderRadius: 20, margin: 5}}>
                    <MaterialIcons name="local-movies" size={20} color="white" style={{alignSelf: 'center', top: 0}}/>
                    <Input 
                        placeholder= 'Michael'
                        label='First Name'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                    />
                    <Input 
                        placeholder= 'Jordan'
                        label='Last Name'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                    />
                    <Input 
                        placeholder= 'MJ23@address.com'
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
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                    />
                    <Input 
                        placeholder= '*********'
                        leftIcon={
                            <Feather name="lock" size={24} color="black" />
                        }
                        label='Confirm Password'
                        secureTextEntry
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                    />
                    {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                    <Button 
                        title= 'Sign Up'
                        raised
                        onPress={ () => {signup({email, password})}}
                    />
                    <Text style={styles.text}>Already have an account?</Text>
                    <TouchableOpacity onPress={ () => {navigation.navigate('Signin')}}>
                        <Text style={{alignSelf: 'center', fontFamily: 'Helvetica', fontSize: 12, color: 'blue'}} >Sign In</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            
        </View>
    </SafeAreaView>

};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1
    },
    container: {
        height: '70%',
        width: '75%',
        alignSelf: 'center',
        top: screen.height/10
    },
    text: {
        alignSelf: 'center',
        fontSize: 15,
        fontFamily: 'Helvetica'
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    }
});

export default Signup;