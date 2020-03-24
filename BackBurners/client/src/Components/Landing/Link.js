import React,{ Component } from 'react';
import PlaidAuthenticator from 'react-native-plaid-link';
import { View} from 'react-native';
import { connect } from 'react-redux';

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
        alert(JSON.stringify(this.state.data))
        return(
            <View></View>
        );
    }
}

const mapDispatch = dispatch => {
    return {
      // rename to same thing - shorthand
      // sendToken: token => dispatch(sendToken(token))
    };
};
  
export default connect(null, mapDispatch)(Link);