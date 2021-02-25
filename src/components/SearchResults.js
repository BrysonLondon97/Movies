import React, {useState, useEffect} from 'react';
import {FlatList, Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import TMDBSearch from '../api/TMDBSearch';
import {navigate} from '../navigationRef';
const TMDBImages = 'https://image.tmdb.org/t/p/original';


const SearchResults = ({searchValue, navigationKey}) => {
    const [results, setResults] = useState([]);

    const searchTMDB = async () => {
        try {
            const response = await TMDBSearch.get(searchValue)

            //console.log(response.data)
            setResults(response.data.results);

        } catch (e) {
            console.log(e)
        }
        return null
    }

    useEffect(() => {
        searchTMDB();
    }, [searchValue])


    return <View>
        <FlatList
            style={{marginBottom: 70}}
            contentContainerStyle={{alignItems: 'center'}}
            numColumns={1}
            data={results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
                return (
                    <View style={styles.container} >
                        <TouchableOpacity onPress={ () => {navigate('Details', {navigationKey, item})}}>
                            <Image 
                                style={styles.image}
                                source={{uri: TMDBImages + item.poster_path}}
                            />
                            <Text style={{fontSize: 24}} numberOfLines={1}>{item.title}</Text>
                        </TouchableOpacity>
                        
                    </View>
                );
            }}
        />
    </View>

};

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    container: {
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'white',
        marginHorizontal: 2,
        padding: 20,
        width: 300

    },
    image: {
        width: 250,
        height: 350,
        borderRadius: 10,
        margin: 0
    }
});

export default SearchResults;