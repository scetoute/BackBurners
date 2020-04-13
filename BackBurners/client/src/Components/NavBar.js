import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';
import { HomeScreen } from './Home';
import { ProfileScreen } from './Profile';
import { ActivityScreen } from './Activity';
import { SettingsScreen } from './Settings';
import { AnalyticsScreen } from './Analytics';
import { Image } from 'react-native'

const ActivityIcon = ({ tintColor }) => (
  <Image style={{}} source={require('../Images/NavBar/Activity.png')}/>
);

const AnalyticsIcon = ({ tintColor }) => (
  <Image style={{}} source={require('../Images/NavBar/Analytics.png')}/>
);

const BellIcon = ({ tintColor }) => (
  <Image source={require('../Images/NavBar/Bell.png')}/>
);

const ProfileIcon = ({ tintColor }) => (
  <Image source={require('../Images/NavBar/Profile.png')}/>
);

const SettingsIcon = ({ tintColor }) => (
  <Image source={require('../Images/NavBar/Settings.png')}/>
);

const Navbar = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ActivityIcon
    }
  },
  Activity: {
    screen: ActivityScreen,
    navigationOptions: {
      tabBarIcon: BellIcon
    }
  },
  Analytics: {
    screen: AnalyticsScreen,
    navigationOptions: {
      tabBarIcon: AnalyticsIcon
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ProfileIcon
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: SettingsIcon
    }
  }
  },{
  initialRouteName: 'Home',
  activeTintColor: 'red',
  inactiveTintColor: '#FFFFFF',
  barStyle: { backgroundColor: '#54C134'}
  }
);

export default Navbar;