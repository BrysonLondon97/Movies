import React, {useRef, useState, useEffect} from 'react';
import {Text, StyleSheet, Dimensions, Animated, ScrollView, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {SafeAreaView} from 'react-navigation';
import MoviesFlatList from '../components/MoviesFlatList';
import SearchResults from '../components/SearchResults';

const {height, width} = Dimensions.get('screen');
//width = 375 height = 812



const ExploreScreen = () => {
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
                    <MoviesFlatList data={'Now_Playing'} />   
                </View>
                <Text style={styles.sectionText}>Popular</Text>
                <View style={{height: (344)}}>
                    <MoviesFlatList data={'Popular'} />   
                </View>
                <Text style={styles.sectionText}>Top Rated</Text>
                <View style={{height: (344)}}>
                    <MoviesFlatList data={'Top_Rated'} />   
                </View>
                <Text style={styles.sectionText}>Upcoming</Text>
                <View style={{height: (344)}}>
                    <MoviesFlatList data={'Upcoming'} />   
                </View>

            </Animated.ScrollView>
        : <SearchResults 
            searchValue={searchValue}
        
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