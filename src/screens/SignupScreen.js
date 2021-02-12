import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements'; 

const Signup = ({navigation}) => {

    return <SafeAreaView forceInset={{top: 'always'}}>
        
        <Text>Sign up</Text>
        <Button 
            title="Sign in"
            onPress={() => {navigation.navigate('Signin')}}
        
        />
    </SafeAreaView>

};

const styles = StyleSheet.create({
    background: {
        height: 100,
        width: 100,
    }
});

export default Signup;