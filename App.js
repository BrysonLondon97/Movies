//import screens
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailsScreen from './src/screens/DetailsScreen';

//import neccessary libraries
import {createStackNavigator} from 'react-navigation-stack';
import {BottomTabBar,createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import React, {useState, useEffect} from 'react';
import { Dimensions, Animated, View } from 'react-native';


//import necessary context/hooks/refs from in the project
import {Provider as MoviesProvider} from './src/context/MoviesContext';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as GenreProvider} from './src/context/GenreContext';
import {setNavigator} from './src/navigationRef';

//a custom bottom tab bar for styling
const CustomBottomBar = (props) => {
  //We use the spread operator to pass down all default properties of a bottom bar
  
  //custom styles for our indicator
  //The width of the indicator should be of equal size with each tab button. We have 3 tab buttons therefore, the width of a single tab button would be the total width Dimension of the screen divided by 3

  const {width} = Dimensions.get('screen')

  //Create an animated value 
  const [position] = useState(new Animated.ValueXY())

  //We attach the x,y coordinates of the position to the transform property of the indicator so we can freely animate it to any position of our choice.
  const animStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom:0,
      width: width/3,
      backgroundColor: 'black',
      transform: position.getTranslateTransform()
  }

  const animate = (value, route) =>{
      //navigate to the selected route on click
      props.navigation.navigate(route)

      //animate indicator
      Animated.timing(position, {
          toValue: {x: value, y: 0},
          duration: 300,
          useNativeDriver: true
      }).start()
  }

  

  return(
      <View>
        <Animated.View style={animStyles} />
          <BottomTabBar {...props} onTabPress={({route}) =>{
              
              switch(route.key){
                  case 'Profile':
                    //animated position should be 0
                    animate(0, route.key)
                    break
                  case 'Explore':
                    //animated position is width/3
                    animate(width/3 , route.key)
                    break
                  case 'Settings':
                    //animated position is width of screen minus width of single tab button
                    animate(width - (width/3), route.key)
                    break
                  default:
                    //animated position is width/3
                    animate(width/3 , route.key)
                    break
              }
        }} style={{backgroundColor: 'transparent'}} />
      </View>
  )
}

//the navigator used to navigate a user through the app
const navigator = createSwitchNavigator({
  //a loading screen where we login a user if necessary, and make API calls to fetch inital data
  Loading: LoadingScreen,

  //screen for dealing with authorization
  loginFlow: createStackNavigator ({
    Signin : SigninScreen,
    Signup : SignupScreen,
  },{
    defaultNavigationOptions:{
      headerShown:false
    }
  }),

  //main flow of the application, this is where the user is majority of the time
  mainFlow: createBottomTabNavigator({
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <FontAwesome name="user" size={24} color={tintColor} />
      }
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        headerShown: true,
        tabBarIcon: ({tintColor}) => <MaterialIcons name="explore" size={24} color={tintColor} />
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <MaterialIcons name="settings" size={24} color={tintColor} />
      }
    },
    
  }, {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white',
      inactiveTintColor: 'black'
    },
    tabBarComponent: (props) => <CustomBottomBar {...props} />,
  }),
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      header: true
    }
  }
  

});

//export the navigator, and wrap it in the authorization provider to make data known across the application
const App = createAppContainer(navigator);
export default () => {
  return (
    <GenreProvider>
      <MoviesProvider>
        <AuthProvider>
          <App ref={(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
      </MoviesProvider>
    </GenreProvider>
    
    
  );
}