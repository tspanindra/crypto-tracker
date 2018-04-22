import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import CoinCard from '../components/coinCard';
import Spinner from 'react-native-loading-spinner-overlay';

import fetchCoinData from '../actions/fetchCoinData';

const mapStateToProps = (state) => {
  return {
    crypto: state.crypto
  }
}
class CryptoContainer extends Component {
  componentDidMount = () => {
    this.props.fetchCoinData();
  }

  renderCoinCards = () => {
    const { crypto } = this.props;
    console.log("********", crypto.data);
    if(crypto && crypto.data) {
      return crypto.data.map((coin) => 
            <CoinCard 
              key={coin.name}
              coin_name={coin.name}
              symbol={coin.symbol}
              price_usd={coin.price_usd}
              percent_change_24h={coin.percent_change_24h}
              percent_change_7d={coin.percent_change_7d}
          />
      )
    }
    return null;
  }
  
  render() {
    const { crypto } = this.props;
    if (crypto.isFetching) {
      return (
          <View>
              <Spinner
                  visible={crypto.isFetching}
                  textContent={"Loading..."}
                  textStyle={{color: '#253145'}}
                  animation="fade"
              />
          </View>
      )
  }
    return (
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
        {/* <Text> HELLO </Text> */}
      </ScrollView>
    )
  }
}

const styles = {
  contentContainer: {
      paddingBottom: 100,
      paddingTop: 15
  }
}

export default connect(mapStateToProps, { fetchCoinData } )(CryptoContainer);