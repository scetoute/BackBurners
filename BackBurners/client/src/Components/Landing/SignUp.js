import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, KeyboardAvoidingView, Animated, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';
import { signup } from '../../store/user';
import { bindActionCreators } from 'redux'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: '',
            fullName: '',
            phoneNumber: ''
        };
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
            toValue: IMAGE_HEIGHT_SMALL
        }).start();
    };

    hideKB = event => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: IMAGE_HEIGHT
        }).start();
    };

    handleSubmit = () => {
        const newUser = {
            email: this.state.email,
            passWord: this.state.password,
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            _id: Math.random().toString(36).substring(2, 9)
        }
        this.props.signup(newUser)
        this.props.navigation.navigate('Link', { title: 'Link' })
    }
    render() {
        return(
            <KeyboardAvoidingView>
                <View>
                    <TextInput nativeID="email" onChangeText={currtext => this.setState({ email: currtext })} value={this.state.email} placeholder="Email"/>
                    <TextInput nativeID="passWd" onChangeText={currtext => this.setState({ password: currtext })} value={this.state.password} placeholder="PassWord"/>
                    <TextInput nativeID="name" onChangeText={currtext => this.setState({ fullName: currtext })} value={this.state.fullName} placeholder="Full Name"/>
                    <TextInput nativeID="phoneNumber" onChangeText={currtext => this.setState({ phoneNumber: currtext })} value={this.state.phoneNumber} placeholder="Phone Number"/>
                </View>
                <View>
                    <Button title={`Link Bank Account →`} onPress={() => { this.handleSubmit() }}>
                        Sign Up !
                    </Button>
                </View>
            </KeyboardAvoidingView>
        ); 
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        signup
    }, dispatch)
};
  
export default connect(null, mapDispatchToProps)(SignUp);