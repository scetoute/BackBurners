
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class Settings extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { user } = this.props
    return(
      <View style={styles.settingsContainer}>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Me.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text> Me <Text style={{fontWeight:'normal'}}>{'\t\t\t\t\t\t' + user.name}</Text>
          </Text>
        </View>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Notifications.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text>Notifications
          </Text>
        </View>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Account.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text>Account <Text style={{fontWeight:'normal'}}>{'\t\t\t\t' + user.email}</Text>
          </Text>
        </View>
        <View style={styles.settingsView}>
          <Text style={styles.text}>
            <Image source={require('../../Images/Settings/Help.png')} style={styles.image}/>
            <Text>{'\t' + '\t'}</Text>Help
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  settingsView: {
    backgroundColor: '#F1FFF1',
    height: 85,
    marginBottom: 30,
    justifyContent: 'center',
    width: '90%'
  },
  image: {
    height: 16,
    width: 16,
    //paddingLeft: 10
  },
  text: {
    color: '#248841',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    
  };
};

const SettingsConnect = connect(mapState, mapDispatch)(Settings);

export default SettingsConnect;

export const SettingsScreen = createStackNavigator({ Settings: { screen: SettingsConnect }});