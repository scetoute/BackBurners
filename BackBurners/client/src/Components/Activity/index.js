
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Activity extends Component {
  render() {
    return(
        <View>
            <Text>Activity Screen</Text>
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
  
  const ActivityConnect = connect(
    mapState,
    mapDispatch
  )(Activity);
  
  export default ActivityConnect;

export const ActivityScreen = createStackNavigator({
    Activity: { screen: ActivityConnect },
});