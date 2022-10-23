import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SasataShop from "../screens/Shop/SasataShop";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Sasata Shop"
        component={SasataShop}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
