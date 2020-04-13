
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { bindActionCreators } from 'redux';
//import ImagePicker from 'react-native-image-picker'
const height = Dimensions.get('screen').height

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null
    }
  }

  /*handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }*/

  render() {
    const { user } = this.props
    const { photo} = this.state
    user.name = 'John Doe'
    return(
      <ScrollView>
        <View>
          <Image style={styles.image} source={require('../../Images/Profile/Photo.png')}/>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={{fontSize: 18, color: '#248841', fontFamily: 'Arial', fontWeight: 'bold'}}>Bank Accounts</Text>
          <ScrollView horizontal={true}>

          </ScrollView>
          <View>
            <Text>Upcoming Bills</Text>
            <ScrollView>

            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%'
  },
  nameView: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: '#248841',
    fontSize: 26,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  bottomView: {
    backgroundColor: '#F1FFF1',
    flex: 1,
    height: height - 246
  }
})

const mapState = state => {
  alert(JSON.stringify(state))
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return bindActionCreators({
        
  }, dispatch)
};

const ProfileConnect = connect(mapState, mapDispatch )(Profile);

export default ProfileConnect;

export const ProfileScreen = createStackNavigator({ Profile: { screen: ProfileConnect }});