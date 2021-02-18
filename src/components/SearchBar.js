import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const Search = ({searchValue, onValueChange, onValueSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather 
            name= 'search'
            style= {styles.iconStyle}
        />
        <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            placeholder = "Search Books..."
            style = {styles.InputStyle}
            value = {searchValue}
            onChangeText = {onValueChange}
            onEndEditing = {onValueSubmit}
        
        />


    </View>
}

const styles = StyleSheet.create({
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    InputStyle: {
        flex: 1,
        fontSize: 18
    },
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10,
        top: 2
    }

})

export default Search;