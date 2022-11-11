import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "../context/CartContext";
import { Foundation } from "@expo/vector-icons";
// create a component
export const MenuIcon = ({ navigation }) => {
  const { getItemsCount } = useContext(CartContext);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        <Foundation name="list" size={40} color="#059dce" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginHorizontal: 8,
    //flex:1
    //backgroundColor: "orange",
    //height: 40,
    //padding: 12,
    //borderRadius: 32,
   // alignItems: "center",
    //justifyContent: "center",
    //flexDirection: "row",
  },
  text: {
    color: "#059dce",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 1,
  },
});
