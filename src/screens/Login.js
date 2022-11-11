//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// create a component
export const Login = ({ navigation }) => {
  const [user, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerImage}
        source={require("../../assets/logoFondo.png")}
      />
      <View style={styles.form}>
        <View style={styles.boxInput}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#a7d921"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeUser}
            value={user}
            placeholder="Usuario"
            keyboardType={"email-address"}
          />
        </View>
        <View style={styles.boxInput}>
          <Feather name="user" size={24} color="#a7d921" />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Contraseña"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TabsRoot")}
        >
          <Text style={styles.textbutton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textQuestion}>¿Aun no estas registrado?</Text>
        <TouchableOpacity>
          <Text style={styles.textCrear}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f6f9f8",
  },
  containerImage: {
    marginTop: 40,
    width: 250,
    height: 130,
  },
  input: {
    //,
    //backgroundColor: "#bfd7e1",
    marginHorizontal: 10,
    calor: "#a7d921",
  },
  form: {
    // marginTop: 30,
    marginBottom: 25,
  },
  button: {
    //flex:1,
    height: 60,
    width: 300,
    backgroundColor: "#a7d921",
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textbutton: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#106294",
  },
  boxInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#a7d921",
    borderRadius: 10,
    padding: 15,
    height: 60,
    width: 300,
    marginTop: 15,
  },
  textCrear: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#059dce",
    padding: 30,
  },
  textQuestion: {
    color: "#059dce",
  },
});

//make this component available to the app
