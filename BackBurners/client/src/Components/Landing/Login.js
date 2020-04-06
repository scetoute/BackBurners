import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, TextInput, KeyboardAvoidingView, Animated, Keyboard, Button } from 'react-native';
import { login } from '../../store/user'
import { bindActionCreators } from 'redux';
import { Notifications } from 'expo'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        this.showKBSub = Keyboard.addListener('showKB', this.showKB);
        this.hideKBSub = Keyboard.addListener('hideKB', this.hideKB);
    }
    
    componentWillUnmount() {
        this.showKBSub.remove();
        this.hideKBSub.remove();
    }

    showKB = event => {
    Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
    }).start();
    };

    hideKB = event => {
    Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
    }).start();
    };

    handleSubmit = async () => {
        let pushTok = await Notifications.getExpoPushTokenAsync();
        this.props.login(this.state.email, this.state.password, this.props.navigation, pushTok)
    }

    render() {
        return(
            <KeyboardAvoidingView>
                <View>
                    <TextInput nativeID="email" onChangeText={currtext => this.setState({ email: currtext })} value={this.state.email} placeholder="Email"/>
                    <TextInput nativeID="passWd" onChangeText={currtext => this.setState({ password: currtext })} value={this.state.password} placeholder="PassWord"/>
                </View>
                <View>
                    <Button title={`Login To Account`} onPress={() => { this.handleSubmit() }}/>
                </View>
            </KeyboardAvoidingView>
        ); 
    }
}

const mapDispatch = dispatch => {
    return bindActionCreators({
        login
    }, dispatch);
};
  
export default connect(null, mapDispatch)(Login);