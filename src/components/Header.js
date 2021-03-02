import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import { navigate } from '../navigationRef';

const Header = ({navigationKey}) => {
    

    return (
        <View style={styles.header} >
            <TouchableOpacity onPress={() => {navigate(navigationKey)}} >
                <Text style={styles.button}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.title} >Details</Text> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: .5,
        borderColor: 'white',
        width: width,
        height: 100,
        bottom: 40,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    button: {
        fontSize: 25,
        color: 'white',
        paddingLeft: 10,
    },
    title: {
        color: 'white',
        left: width / 2 - 110,
        fontSize: 30
    },
})

export default Header;