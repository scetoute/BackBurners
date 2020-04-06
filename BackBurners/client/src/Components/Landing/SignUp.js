import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, KeyboardAvoidingView, Animated, Keyboard, StyleSheet, Image, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { signup } from '../../store/user';
import { bindActionCreators } from 'redux'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: '',
            name: '',
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
            name: this.state.name,
            _id: Math.random().toString(36).substring(2, 9)
        }
        this.props.signup(newUser)
        this.props.navigation.navigate('Link', { title: 'Link' })
    }
    render() {
        return(
            <KeyboardAvoidingView style={styles.signupSection} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
                <View style={styles.inputField}>
                    <Image style={styles.image} source={require('../../Images/personIcon.png')}/>
                    <TextInput style={styles.text}  placeholder="Full Name"
                    onChangeText={currtext => this.setState({ name: currtext })} value={this.state.name}/>
                </View>
                <View style={styles.inputField}>
                    <Image style={styles.image} source={require('../../Images/MailIcon.png')}/>
                    <TextInput style={styles.text}  placeholder="Email" 
                    onChangeText={currtext => this.setState({ email: currtext })} value={this.state.email}/>
                </View>
                <View style={styles.inputField}>
                    <Image style={styles.image} source={require('../../Images/LockIcon.png')}/>
                    <TextInput style={styles.text} secureTextEntry={true} placeholder="Password"
                    onChangeText={currtext => this.setState({ password: currtext })} value={this.state.password}/>
                </View>
                {<View style={styles.buttonview}>
                    <Button style={styles.button} title={`Link Bank Account →`} onPress={() => { this.handleSubmit() }}>
                        Sign Up !
                    </Button>
                </View>}
            </KeyboardAvoidingView>
        ); 
    }
}

const styles = StyleSheet.create({
    signupSection: {
        flex:1,
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    inputField: {
        //flex: 1,
        justifyContent: "center",
        //paddingTop: -35,
        alignItems: 'center',
        flexDirection: 'row',
        //backgroundColor: '#000000',
        height: 120
    },
    image: {
        padding: 10,
        margin: 5,
    },
    text: {
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#248841',
        width: 300,
        textAlign: 'center',
        color: '#248841'
    },
    buttonview: {
        alignContent: "center",
        justifyContent: 'center',
        backgroundColor: '#248841',
        
        color: '#ffffff',
        width: 300,
        height: 40,
    },
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        signup
    }, dispatch)
};
  
export default connect(null, mapDispatchToProps)(SignUp);