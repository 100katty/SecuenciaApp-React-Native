//import liraries
import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

import { getProduct } from "../services/ProductsService";
import { CartContext } from "../context/CartContext";

// create a component
export const ProductsDetails = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  const { addItemToCart } = useContext(CartContext);

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text>{product.description}</Text>
          <TouchableOpacity style={styles.button} onPress={onAddToCart}>
            <Text style={styles.text}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    //margin: "4%",
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  infoContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: "white",
    margin: "4%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
  button: {
    marginTop: 40,
    backgroundColor: "#a7d921",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
