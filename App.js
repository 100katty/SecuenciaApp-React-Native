import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/Navigation";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </CartProvider>
  );
}

