import React from "react";
import { Center, Heading, Input, View } from "native-base";
import { Button, Image, Pressable, SafeAreaView, Text } from "react-native";
import tw from "twrnc";
import { useAuth } from "../../contexts/Auth";
import CountDown from "react-native-countdown-component";

export default function Countdown({ navigation }) {
  const auth = useAuth();

  return (
    <SafeAreaView style={tw``}>
      <View style={tw`p-4 h-220 bg-amber-100`}>
        <Center>
          <Heading size="md" style={tw`text-teal-600 mt-20 mb-10`}>
            Mulai Decluttering Hari Ini!
          </Heading>
          <CountDown
            // until={60 * 30 + 30}
            until={60}
            timeToShow={["M", "S"]}
            onFinish={() => console.log("finished")}
            onPress={() => alert("hello")}
            size={40}
          />
          <Heading size="md" style={tw`text-teal-600 mt-30 mb-5`}>
            Mau Decluttering?
          </Heading>
          <Button title="Atur Fokus Decluttering"></Button>
        </Center>
      </View>
    </SafeAreaView>
  );
}
