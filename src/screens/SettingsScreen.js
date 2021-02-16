import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingsScreen = () => {

    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});

export default SettingsScreen;