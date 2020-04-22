
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { getAccTransData } from '../../store/accountTransactions';
import { getLatestAccData } from '../../store/token'
import { bindActionCreators } from 'redux';
const moment = require('moment');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      OGdataLoaded: false
    }
    this.getAccTran.bind(this)
  }

  getAccTran = () => {
    console.log(this.state)
    if(this.state.loading) {
      this.props.getAccTransData(this.props.user._id)
      setTimeout(() => {
        console.log(this.props.transactions[0])
        if(this.props.transactions !== undefined) {
          this.setState({
            loading: false,
            OGdataLoaded: true
          })
          if(this.state.OGdataLoaded) {
            console.log('HEREEEE')
            var date_time = this.props.transactions[0].createdAt;
            console.log(date_time)
            var isBefore = moment(date_time).isBefore(moment().toISOString())
            console.log(isBefore)
            if(isBefore) {
              this.props.getLatestAccData(this.props.user._id)
              setTimeout(() => {
                date_time = this.props.transactions[0].createdAt;
                console.log(date_time)
                isBefore = moment(date_time).isBefore(moment().toISOString())
                if(!isBefore) {
                  this.setState({
                    OGdataLoaded: false
                  })
                }
              }, 3000)
            }
          }
        }
      }, 3000)
    }
  }

  componentDidMount() {
    this.getAccTran()
  }

  render() {
    return(
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    transactions: state.accTrans.trans
  };
};

const mapDispatch = dispatch => {
  return bindActionCreators({
    getAccTransData,
    getLatestAccData
  }, dispatch)
};

const HomeConnect = connect(mapState,mapDispatch)(Home);

export default HomeConnect;

export const HomeScreen = createStackNavigator({ Home: { screen: HomeConnect }});