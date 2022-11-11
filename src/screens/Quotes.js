//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// create a component
export const Quotes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContent}>
        <TouchableOpacity style={styles.itemButtonCotizacion}>
          <Text style={styles.textButton}>Enviadas</Text>
          <AntDesign name="arrowright" size={40} color="#04445c" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemButtonCotizacion}>
          <Text style={styles.textButton}>Concluidas</Text>
          <MaterialIcons name="file-download-done" size={40} color="#04445c" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemButtonCotizacion}>
          <Text style={styles.textButton}>Canceladas</Text>
          <MaterialCommunityIcons name="cancel" size={40} color="#04445c" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#f6f9f8",
    backgroundColor: "#f6f9f8",
    backgroundColor: "white",
    borderRadius: 10,
    margin: "4%",
  },
  buttonContent: {
    flex: 2,
    // justifyContent: "center",
    marginTop: 150,
  },
  itemButtonCotizacion: {
    //margin: "4%",
    backgroundColor: "#a7d921",
    width: 330,
    height: 90,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#a7d921",
  },
  textButton: {
    //color: "#104c64",
    color: "#04445c",
    fontWeight: "bold",
    fontSize: 30,
  },
  titleCotizaciones: {
    marginTop: 50,
    //marginBottom: 40,
    color: "#04445c",
    fontWeight: "bold",
    fontSize: 40,
  },
});

//make this component available to the app
