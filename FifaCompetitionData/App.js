import React from 'react';
import Home from './src/view/home/home';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

const navigator = createStackNavigator({
  Home: { 
    header: null,
    screen: Home 
  },
})

const AppContainer = createAppContainer(navigator)

const App = () => {
  return (
    <AppContainer />
  )
};

export default App;
