
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native';
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
        <Text>$15.00</Text>
        <Text>You have $15.00 in your budget</Text>
        <Text>Congratulations! You have no outstanding bills</Text>
        <Text>Your Netflix bill is coming up tomorrow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {

    backgroundColor: '#D9F0D8',
    width:500,
    marginTop:100,
    // height: 500,


  }

})



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