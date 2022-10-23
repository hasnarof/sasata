import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator navigationOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
