import React, {useContext} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen')
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const SettingsScreen = () => {
    const {signout} = useContext(AuthContext);


    return <View style={styles.container}>
        <View style={{top: height / 2 - 40}}>
            <Text style={styles.text} >Goodbye, User</Text>
            <Button 
                title= 'Sign Out'
                onPress={signout}
            />
        </View>
    </View>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 25,
        marginBottom: 10
    }
});

export default SettingsScreen;