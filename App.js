/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import login from './screens/login';
import ForYou from './src/ForYou';
import DetailWebtoon from './src/DetailWebtoon';
// import DetailEpisodeScreen from './src/DetailEpisodeScreen';

import {createAppContainer, createSwitcNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Login = createStackNavigator ({
    LoginScreen: {
        screen: login,
        navigationOptions: () => ({
            header: null
        })
    },
    ForYouScreen: {
        screen: ForYou,
        navigationOptions: () => ({
            header : null
        })
    },
    DetailWebtoonScreen: DetailWebtoon,
},
{initialRoutineName: 'Login',}
);

export default createAppContainer(Login);

// export default login;
