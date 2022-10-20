import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React from "react";

const Firstscreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={Styles.body}>
      <View style={Styles.imageContainer}>
        <Image
          source={require("../../assets/firstpage1.png")}
          style={Styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.heading}>Plant Trees</Text>
        <Text style={Styles.heading}>Invest in Nature</Text>
        <Pressable style={Styles.button} onPress={handlePress}>
          <Text style={Styles.buttonTxt}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};
let imageRadius = 0;
const Styles = StyleSheet.create({
  body: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#04724D",
    // backgroundColor: "#0DAB76",
    backgroundColor: "#004E24",
    // backgroundColor: "lightgreen",
  },
  imageContainer: {
    flex: 7.5,
    // backgroundColor: "red",
    zIndex: 99,
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: imageRadius,
    borderBottomRightRadius: imageRadius,
    resizeMode: "cover",
    zIndex: 99,
  },
  textContainer: {
    zIndex: 1,
    flex: 2.5,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontWeight: "800",
    color: "white",
    fontSize: RFPercentage(3.5),
    textTransform: "uppercase",
    textAlign: "center",
    //     width: "50%",
  },
  button: {
    backgroundColor: "#312509",
    backgroundColor: "#65532F",
    backgroundColor: "#B56B45",
    //     width: "55%",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 50,

    marginTop: 20,
    margin: "auto",
    alignSelf: "center",
  },
  buttonTxt: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Firstscreen;
