import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';
import { HomeScreen } from './Home';
import { ProfileScreen } from './Profile';
import { ActivityScreen } from './Activity';
import { SettingsScreen } from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome5'

const homeIcon = ({ tintColor }) => (
    <Icon name="home" size={25} color={tintColor} />
);

const profileIcon = ({ tintColor }) => (
    <Icon name="user" size={25} color={tintColor} />
);

const settingsIcon = ({ tintColor }) => (
    <Icon name="users-cog" size={25} color={tintColor} />
);

const activityIcon = ({ tintColor }) => (
    <Icon name="chart-line" size={25} color={tintColor} />
);

const Navbar = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: homeIcon
    }
  },
  Activity: {
    screen: ActivityScreen,
    navigationOptions: {
      tabBarIcon: activityIcon
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: settingsIcon
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: profileIcon
    }
  }
  },{
  initialRouteName: 'Home',
  activeTintColor: 'red',
  inactiveTintColor: '#FFFFFF',
  barStyle: { backgroundColor: 'yellow'}
  }
);

export default Navbar;