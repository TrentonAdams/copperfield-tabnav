import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MyStage from "../screens/MyStage";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

// Just use 'MyStage' and no back is available
// then try adding the commented out ones one by one and you'll see bizarre
// behaviour.
// Use MyStage and the 3 others together results in a back button.

// this doesn't seem like a library with well defined behaviour.
const MyStageNav = createStackNavigator({
  // Home: {screen: HomeScreen},
  // Links: {screen: LinksScreen},
  // Settings: {screen: SettingsScreen},
  MyStage: {screen: MyStage},
});


export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  MyStage: MyStageNav,
}));