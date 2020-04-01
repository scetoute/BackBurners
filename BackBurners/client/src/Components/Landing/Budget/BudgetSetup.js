import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, KeyboardAvoidingView, Button } from 'react-native';
import { updateBudget } from '../../../store/budget'
class BudgetSetup extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {

        return(
            <View>
                <Text>Budget Setup Page</Text>
                <Button title={'Finish'} onPress={() => this.props.navigation.navigate('Home', { title: 'Home' })}>Finish</Button>
            </View>
        )
    }
}

const mapStateTooProps = state => {
    return {
      budget: state.budget
    };
  };
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateBudget
    }, dispatch)
};
  
export default connect(mapStateTooProps, mapDispatchToProps)(BudgetSetup);