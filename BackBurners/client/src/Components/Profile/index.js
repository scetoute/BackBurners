
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Profile extends Component {
    render() {
        return(
            <View>
                <Text>Profile Screen</Text>
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
  
  const ProfileConnect = connect(
    mapState,
    mapDispatch
  )(Profile);
  
  export default ProfileConnect;

export const ProfileScreen = createStackNavigator({
    Profile: { screen: ProfileConnect },
});