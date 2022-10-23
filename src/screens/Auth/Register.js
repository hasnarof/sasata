import React from "react";
import { Center, Input, View } from "native-base";
import { Button, Image, Pressable, SafeAreaView, Text } from "react-native";
import tw from "twrnc";
import { useAuth } from "../../contexts/Auth";

export default function Register({ navigation }) {
  const [formValue, setFormValue] = React.useState({});
  const auth = useAuth();

  handleLogin = (e) => {
    e.preventDefault();
    auth.signIn(formValue.email, formValue.password);
    // ClientHttp.post("/api/auth/signin", {
    //   email: "hasnarof1@gmail.com",
    //   password: "hasnacantik",
    // })
    //   .then((res) => {
    //     console.log(res)
    //     // navigation.navigate("Home")
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  };
  return (
    <SafeAreaView>
      <View style={tw`p-4`}>
        <Center style={tw`mt-20 mb-10`}>
          <Image
            style={tw`object-contain w-50 h-52`}
            source={require("../../assets/sasata/logo.png")}
          ></Image>
        </Center>
        <Text>Email</Text>
        <Input></Input>
        <Text style={tw`mt-5`}>Password</Text>
        <Input type="password"></Input>
        <View style={tw`mt-5`}>
          <Button title="SIGN IN" onPress={handleLogin}></Button>
        </View>
        <Center style={tw`mt-5`}>
          <Pressable>
            <Text style={tw`underline`}>Sign up</Text>
          </Pressable>
        </Center>
      </View>
    </SafeAreaView>
  );
}
