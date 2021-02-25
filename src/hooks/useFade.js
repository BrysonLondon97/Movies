import {useRef, useEffect, useState, useContext} from 'react';
import {Animated} from 'react-native';
import {Context as MoviesContext} from '../context/MoviesContext';


//create a Fade animation
const useFade = () => {
    const {state} = useContext(MoviesContext);
    //set an index variable for the image we want to display
    const [index, setIndex] = useState('');

    //set the initial value of index, SO WE DONT GET FUCKING UNDEFINED EVERY DAMN TIME
    useEffect(() => {
      setIndex(Math.floor(Math.random() * state.moviesNowPlaying.length))
      return setIndex('')
    }, [])


    //set the value that is responsible for chaning the opacity of the image
    const transitionNum = useRef(new Animated.Value(0)).current;

    //function that will change the transition value
    const pulse = () => {
        //run these animations in sequence
        Animated.sequence([
            Animated.timing(transitionNum, { toValue: 1, useNativeDriver: false, duration: 3000}),
            Animated.timing(transitionNum, { toValue: 0, useNativeDriver: false, duration: 3000}),
        //repeat
        ]).start(() => pulse());

        //grab new photo
        setIndex(Math.floor(Math.random() * state.moviesNowPlaying.length))
    };

    useEffect(() => {
        //start a timer that keeps calling the animation function
        const timeout = setTimeout(() => pulse());
        //stop the timer once screen is unmounted
        return () => clearTimeout(timeout);
    }, []);

    return {transitionNum, index};
  };

  export default useFade