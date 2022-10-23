import React from "react";
import { Center, Heading, HStack, Input, Text, View } from "native-base";
import { Button, Image, Pressable, SafeAreaView } from "react-native";
import tw from "twrnc";
import { useAuth } from "../contexts/Auth";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [formValue, setFormValue] = React.useState({});
  const auth = useAuth();

  return (
    <SafeAreaView>
      <View style={tw`p-4`}>
        <Heading size="lg" style={tw`mt-10 mb-2`}>
          Hai, Akmal! 👋
        </Heading>
        <Heading size="md" style={tw`text-teal-600 mb-2`}>
          Yuk, Mulai Decluttering Hari Ini!
        </Heading>
        <Center>
          <Image
            style={tw`w-80 h-40`}
            source={require("../assets/sasata/home_banner.png")}
          ></Image>
        </Center>

        <HStack space={2} style={tw`mt-5`}>
          <TouchableOpacity style={tw`bg-white shadow-md p-4 w-28 h-25`}>
            <Text bold>Fokus Decluttering</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-white shadow-md p-4 w-28 h-25`}>
            <Text bold>Diary Decluttering</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-white shadow-md p-4 w-28 h-25`}>
            <Text bold>History Decluttering</Text>
          </TouchableOpacity>
        </HStack>
        <HStack space={2} style={tw`mt-2`}>
          <TouchableOpacity style={tw`bg-white shadow-md p-4 w-28 h-25`}>
            <Text bold>Challenge Decluttering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-white shadow-md p-4 w-28 h-25`}
            onPress={() => navigation.navigate("Sasata Shop")}
          >
            <Text bold>Satata Shop</Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </SafeAreaView>
  );
}
