import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { AuthProvider } from "./src/contexts/Auth";
import { Router } from "./src/routes/Router";
import Login from "./src/screens/Auth/Login";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <View style={styles.container}> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* </View> */}

      <AuthProvider>
        <Router />
      </AuthProvider>

      {/* <Login></Login> */}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
