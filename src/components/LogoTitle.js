//import liraries
import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { CartIcon } from "./CartIcon";

// create a component
export const LogoTitle = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImage}
        source={require("../../assets/logo.jpg")}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    marginLeft:-35
  },
  containerImage: {
    //flex: 2,
    width: 100,
    height: 50,
    // marginLeft: 140,
  },
});
