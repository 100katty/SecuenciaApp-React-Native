//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Product } from "../components/Product";
import { getProducts } from "../services/ProductsService";

// create a component
export const ProductsList = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  const renderProduct = ({ item: product }) => {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductsDetails", { productId: product.id });
        }}
      />
    );
  };
  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  productsList: {
    flex: 1,
    backgroundColor: "#f6f9f8",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

//make this component available to the app
