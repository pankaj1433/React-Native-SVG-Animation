import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

//components
import SvgComponents from '../screens/SvgComponents.screen';
import Home from '../screens/Home.screen';


const stackNavigatorConfig = {
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
  
          const height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
          });
  
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
  
          return { opacity, transform: [{ translateY }] };
        },
    })
} 

export const SVGStack = createStackNavigator({
    SvgComponents: {
        screen: SvgComponents,
    },
    Home: {
        screen: Home,
    },
},stackNavigatorConfig);
