//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@react-native-material/core";
// create a component
export const Acount = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="account-circle"
        size={100}
        color="#a7d921"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Información Personal</Text>
        <View>
          <Text>Catalina Hernandez</Text>
          <Text>Venustiano Carranza #220</Text>
          <Text>(+52) 485-8452-123</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.text}>Información de la empresa</Text>
        <View>
          <Text>BMW Company</Text>
          <Text>Gerente de RH</Text>
          <Text></Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.text1}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.text1}>Version</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f9f8",
    backgroundColor: "white",
    borderRadius: 10,
    margin: "4%",
  },
  iconBox: {
    borderWidth: 1,
    borderColor: "#a7d921",
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  button: {
    width: 340,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#a7d921",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor: "#a7d921",
  },
  button2: {
    width: 340,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#a7d921",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor: "#a7d921",
  },
  button3: {
    width: 340,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#a7d921",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#a7d921",
  },
  text: {
    color: "#a7d921",
    fontWeight: "bold",
    fontSize: 18,
  },
  text1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

//make this component available to the app
