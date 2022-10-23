import React, { useEffect } from "react";
import { Center, Input, ScrollView, View } from "native-base";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import { useAuth } from "../../contexts/Auth";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/Colors";
import { ClientHttp } from "../../constants/ClientHttp";
import { TouchableOpacity } from "react-native-gesture-handler";
import { common } from "../../constants/Common";

export default function SasataShop({ navigation }) {
  const [products, setProducts] = React.useState([]);
  const { authData } = useAuth();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    ClientHttp.get("/api/product", {
      headers: {
        Authorization: `Bearer ${authData.token}`,
      },
    })
      .then((res) => {
        let resProducts = res.data.data;
        setProducts(resProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`p-5`}>
          <Input
            InputRightElement={
              <Icon
                name="search"
                style={{ color: colors.primary, marginRight: 10 }}
                size={18}
              />
            }
            size={18}
            placeholder="Search product..."
          ></Input>

          <View style={tw`flex flex-row flex-wrap`}>
            {products.map((product, key) => (
              <TouchableOpacity
                style={styles.product}
                key={key}
                onPress={() =>
                  navigation.navigate("Detail Product", {
                    productId: product.id,
                  })
                }
              >
                <Image
                  source={{
                    uri: common.baseUrl + "/" + product.images[0].image,
                  }}
                  style={tw`w-35 h-20`}
                />
                <Text style={styles.textProduct1}>{product.name}</Text>
                <Text style={styles.textProduct2}>
                  Rp
                  {parseFloat(product.price)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </Text>
                <View style={styles.detProduct}>
                  <View style={styles.rating}>
                    <Text style={tw`text-gray-500`}>Tasikmalaya</Text>
                  </View>
                  <Icon
                    name="bars"
                    style={{ color: colors.neutral70, marginLeft: 5 }}
                    size={12}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  text1: {
    // fontFamily: 'PoppinsRegular',
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#181818",
    textAlign: "left",
    marginLeft: "5%",
  },
  container2: {
    // flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "5%",
    marginTop: 10,
  },
  feature: {
    alignItems: "center",
  },
  text2: {
    // fontFamily: 'PoppinsRegular',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#181818",
    textAlign: "center",
  },
  subtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  text3: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    marginTop: 50,
  },
  text4: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#181818",
    textAlign: "right",
    marginRight: "5%",
  },
  productContainer: {
    // flexDirection: "row",
  },
  product: {
    marginTop: 10,
    width: 170,
    padding: 10,
    borderColor: colors.quaternary,
    borderWidth: 3,
    borderRadius: 10,
    shadowColor: "0px 0px 0px rgba(0, 0, 0, 0.75)",
    // marginLeft: "5%",
    backgroundColor: colors.white0,
  },
  subproduct: {
    width: 145,
    height: 145,
  },
  text5: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#181818",
  },
  textProduct1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textProduct2: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 6,
    marginBottom: 5,
  },
  detProduct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  text6: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#5A81FA",
  },
});
