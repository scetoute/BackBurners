
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Home extends Component {
  render() {
    return(
      <View>
        <Text>Home Screen</Text>
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

const HomeConnect = connect(mapState,mapDispatch)(Home);

export default HomeConnect;

export const HomeScreen = createStackNavigator({ Home: { screen: HomeConnect }});