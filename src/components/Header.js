import React, { Component } from 'react'

import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.header}> Crypto currency</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headercontainer: {
    marginTop: 55,
    alignItems: 'center',
  },
  header : {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default Header;