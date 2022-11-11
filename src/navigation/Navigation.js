import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { ProductsList } from "../screens/ProductsList";
import { ProductsDetails } from "../screens/ProductsDetails";
import { Quotes } from "../screens/Quotes";
import { Acount } from "../screens/Acount";
import { colores } from "../theme/AppTheme";
import { Cart } from "../screens/Cart";
import { CartIcon } from "../components/CartIcon";
import { LogoTitle } from "../components/LogoTitle";
import { Login } from "../screens/Login";
import { MenuIcon } from "../components/MenuIcon";

const ProductsStack = createNativeStackNavigator();

function ProductsStackScreen() {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="Productos"
        component={ProductsList}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <CartIcon navigation={navigation} />,
          headerLeft: () => <MenuIcon navigation={navigation} />,
        })}
      />
      <ProductsStack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={({ navigation }) => ({
          title: "Detalles de producto",
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <ProductsStack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "Carrito de compras",
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
    </ProductsStack.Navigator>
  );
}

const QuotesStack = createNativeStackNavigator();

function QuotesStackScreen() {
  return (
    <QuotesStack.Navigator>
      <QuotesStack.Screen
        name="Cotizacion"
        component={Quotes}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <CartIcon navigation={navigation} />,
          headerLeft: () => <MenuIcon navigation={navigation} />,
        })}
      />
    </QuotesStack.Navigator>
  );
}
const AcountStack = createNativeStackNavigator();

function AcountStackScreen() {
  return (
    <AcountStack.Navigator>
      <AcountStack.Screen
        name="Mi cuenta"
        component={Acount}
        options={({ navigation }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => <CartIcon navigation={navigation} />,
          headerLeft: () => <MenuIcon navigation={navigation} />,
        })}
      />
    </AcountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Catalogo") {
            return (
              <Ionicons
                name={
                  focused ? "ios-list-circle-sharp" : "ios-list-circle-outline"
                }
                size={35}
                color={color}
              />
            );
          } else if (route.name === "Cotizaciones") {
            return (
              <MaterialCommunityIcons
                name={focused ? "file-document" : "file-document-outline"}
                size={35}
                color={color}
              />
            );
          } else if (route.name === "Perfil") {
            return (
              <MaterialCommunityIcons
                name={focused ? "account-circle" : "account-circle-outline"}
                size={35}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: colores.InactiveTintColor,
        tabBarActiveTintColor: colores.ActiveTintColor,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Catalogo" component={ProductsStackScreen} />
      <Tab.Screen name="Cotizaciones" component={QuotesStackScreen} />
      <Tab.Screen name="Perfil" component={AcountStackScreen} />
    </Tab.Navigator>
  );
};

const AppStack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="TabsRoot"
        component={Navigation}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};
