import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { SignUp } from '../../index'
class Landing extends Component {
    render() {
        return(
            <View style={styles.LandingSection}>
                <View >
                    <SignUp />
                </View>
                <View>
                    {/*<Button title={`Login`} onPress={() => this.props.navigation.navigate('Login', { title: 'Login' })} />*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginButtonSection: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    LandingSection: {
        justifyContent: 'center',
        alignContent: 'center'
    }
})


export default Landing;
