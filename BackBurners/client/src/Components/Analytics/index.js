
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Analytics extends Component {
  render() {
    return(
      <View>
        <Text>Analytics Screen</Text>
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

const AnalyticsConnect = connect(mapState,mapDispatch)(Analytics);

export default AnalyticsConnect;

export const AnalyticsScreen = createStackNavigator({ Analytics: { screen: AnalyticsConnect }});