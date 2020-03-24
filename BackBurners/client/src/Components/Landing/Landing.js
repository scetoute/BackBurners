import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';

class Landing extends Component {
    render() {
        return(
            <View >
                <View >
                    <View style={{padding: 10}}>
                    <Button
                        button
                        text
                        title={`Login`}
                        onPress={() =>
                            this.props.navigation.navigate('Login', { title: 'Login' })
                        }
                    >
                    </Button>
                    </View>
                    <View style={{padding: 10}}>
                <Button
                    button
                    text
                    title={`SignUp`}
                    onPress={() => 
                        this.props.navigation.navigate('SignUp', { title: 'SignUp' })
                    }
                />
                </View>
                </View>
            </View>
        );
    }
}


export default Landing;
