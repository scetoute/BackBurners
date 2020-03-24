
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Settings extends Component {
  render() {
    return(
      <View>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

const mapState = state => {
    return {
      
    };
  };
  
  const mapDispatch = dispatch => {
    return {
      
    };
  };
  
  const SettingsConnect = connect(
    mapState,
    mapDispatch
  )(Settings);
  
  export default SettingsConnect;

export const SettingsScreen = createStackNavigator({
    Settings: { screen: SettingsConnect },
});