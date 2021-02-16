import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ProfileScreen = () => {

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

export default ProfileScreen;