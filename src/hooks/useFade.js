import {useRef, useEffect} from 'react';
import {Animated} from 'react-native'

export default (startDelay = 500) => {
    const transitionNum = useRef(new Animated.Value(0)).current;

    const pulse = () => {
        Animated.sequence([
            Animated.timing(transitionNum, { toValue: 1, useNativeDriver: false, duration: 3000}),
            Animated.timing(transitionNum, { toValue: 0, useNativeDriver: false, duration: 3000}),
        ]).start(() => pulse());
        //grab new pho
        
    };

    useEffect(() => {
        const timeout = setTimeout(() => pulse(), startDelay);
        return () => clearTimeout(timeout);
    }, []);

    return transitionNum;
};