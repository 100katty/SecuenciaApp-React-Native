import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Image,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../context/CartContext";

export function Cart({ navigation }) {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View>
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.mainTotal}>$ {total}</Text>
        </View>
        <TouchableOpacity style={styles.buttonCotizacion}>
          <Text style={styles.textButton}>Enviar Cotizacion</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderItem({ item }) {
    return (
      <>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.product.image} />
          <Text style={styles.lineLeft}>
            {item.product.name} x {item.qty}{" "}
            <Text style={styles.productTotal}>${item.totalPrice}</Text>
          </Text>
        </View>
      </>
    );
  }

  return (
    <View>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
    width: "90%",
    paddingVertical: 10,
    backgroundColor: "while",
    // padding: 10,
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  productTotal: {
    fontWeight: "bold",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
    padding: 10,
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
    padding: 10,
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
    padding: 10,
  },
  itemsList: {
    //backgroundColor: "#eeeeee",
    margin: "2%",
  },
  itemsListContainer: {
    backgroundColor: "white",
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    padding: 20,
    margin: "4%",
  },
  buttonCotizacion: {
    //flex: 5,
    width: 340,
    height: 50,
    backgroundColor: "#a7d921",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
