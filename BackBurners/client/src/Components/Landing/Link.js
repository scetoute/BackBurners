import React,{ Component } from 'react';
import PlaidAuthenticator from 'react-native-plaid-link';
import { View, Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { sendTok } from '../../store/token'
class Link extends Component {
    state = {
        data: {},
        status: ''
    }

    render() {
        switch (this.state.status) {
            case 'CONNECTED':
              return this.renderDetails();
            default:
              return this.renderLogin();
        }
    }

    onMessage = data => {
        this.setState({
            data,
            status: data.action.substr(data.action.lastIndexOf(':') + 1).toUpperCase()
        });
    };
    
    renderLogin() {
        return(
            <PlaidAuthenticator publicKey="ae0d789b854b418325ba1e8994c2f7" clientName="Earmark" env="sandbox" product="auth,transactions" onMessage={this.onMessage}/>
        );
    }

    renderDetails() {
        this.props.sendTok(this.state.data.metadata.public_token);
        alert(this.state.status)
        return(
            <View>
                <Text>Setup Budget</Text>
                <Button title={'Setup Your Budget'} onPress={() => this.props.navigation.navigate('BudgetSetUp', { title: 'BudgetSetup' })}>
                    Set Up!
                </Button>
            </View>
        );
    }
}

const mapDispatch = dispatch => {
    return bindActionCreators({
        sendTok
    }, dispatch)
};
  
export default connect(null, mapDispatch)(Link);