import React, {useRef, useState, useEffect} from 'react';
import {Text, StyleSheet, Dimensions, Animated, View, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import {SafeAreaView} from 'react-navigation';
import MoviesFlatList from '../components/MoviesFlatList';
import SearchResults from '../components/SearchResults';

const {height, width} = Dimensions.get('screen');
//width = 375 height = 812



const ExploreScreen = ({navigation}) => {
    const [searchValue, setSearchValue] = useState('');

    return <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        
        <SearchBar 
            searchValue={searchValue}
            onValueChange={newValue => setSearchValue(newValue)}
            onValueSubmit={() => {
                
            }}
        />

        {!searchValue  
        ?   <Animated.ScrollView
                style={{top: 0 , height: 800}}
            >

                <Text style={styles.sectionText}>Now Playing</Text>
                <View style={{height: (344)}}>
                    <MoviesFlatList data={'Now_Playing'} navigationKey={navigation.state.key}/>   
                </View>
        

                <Text style={styles.sectionText}>Popular</Text>
                <View style={{height: (344)}}>
                    <MoviesFlatList data={'Popular'} navigationKey={navigation.state.key} />   
                </View>



                <Text style={styles.sectionText}>Top Rated</Text>
                <View style={{height: (344)}}>
                    <MoviesFlatList data={'Top_Rated'} navigationKey={navigation.state.key} />   
                </View>



                <Text style={styles.sectionText}>Upcoming</Text>
                <View style={{height: (344)}}>
                    <MoviesFlatList data={'Upcoming'} navigationKey={navigation.state.key} />   
                </View>

            </Animated.ScrollView>
        : <SearchResults 
            searchValue={searchValue}
            navigationKey={navigation.state.key}
        />
        }
    </SafeAreaView>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    sectionText: {
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Helvetica',
        fontSize: 35
    }
});

export default ExploreScreen;


/*

                
*/