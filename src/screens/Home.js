import React from "react";
import { Center, Input, View } from "native-base";
import { Button, Image, Pressable, SafeAreaView, Text } from "react-native";
import tw from "twrnc";
import { useAuth } from "../contexts/Auth";

export default function Home({ navigation }) {
  const [formValue, setFormValue] = React.useState({});
  const auth = useAuth();

  return (
    <SafeAreaView>
      <View style={tw`p-4`}>
        <Center style={tw`mt-10 mb-10`}>
          <Image
            style={tw`object-contain w-50 h-52`}
            source={require("../assets/sasata/logo.png")}
          ></Image>
        </Center>
        <Text>Email</Text>
        <Input></Input>
        <Text style={tw`mt-5`}>Password</Text>
        <Input type="password"></Input>
      </View>
    </SafeAreaView>
  );
}
