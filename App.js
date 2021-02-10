import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import {setNavigator} from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';


const navigator = createSwitchNavigator({

  loginFlow: createStackNavigator ({
    Signin : SigninScreen,
    Signup : SignupScreen,
  },{
    defaultNavigationOptions:{
      headerShown:false
    }
  })

});



export default createAppContainer(navigator);