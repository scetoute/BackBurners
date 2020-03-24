import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, KeyboardAvoidingView, Animated, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: '' 
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
    render() {
        return(
            <KeyboardAvoidingView>
                <View>
                    <TextInput nativeID="email" onChangeText={currtext => this.setState({ email: currtext })} value={this.state.email} placeholder="Email"/>
                    <TextInput nativeID="passWd" onChangeText={currtext => this.setState({ password: currtext })} value={this.state.password} placeholder="PassWord"/>
                </View>
                <View>
                    <Button title={`Link Bank Account →`} onPress={() => { this.props.navigation.navigate('Link', { title: 'Link' }) }}>
                        Sign Up !
                    </Button>
                </View>
            </KeyboardAvoidingView>
        ); 
    }
}

const mapDispatch = dispatch => {
    return {
        
    };
};
  
export default connect(null, mapDispatch)(SignUp);