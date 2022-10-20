import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableWithoutFeedback,
  ToastAndroid,
  Keyboard,
} from "react-native";

const SecondScreen = ({ navigation }) => {
  useEffect(() => {
    setNumberFromLocal();
    checkIfLogin();
  }, []);
  const checkIfLogin = async () => {
    let login = await AsyncStorage.getItem("login");
    if (login === "True") {
      // navigation.navigate("Third");
    }
  };
  const setNumberFromLocal = async () => {
    let num = await AsyncStorage.getItem("number");
    setNumber(num);
  };
  const handlePress = async () => {
    try {
      let formData = new FormData();
      formData.append("c_mob", number);
      formData.append("c_otp", otp);
      const option = {
        method: "POST",
        body: formData,
      };
      let response = await fetch(
        "http://test.maymornings.com/index.php/Api/Customers/verifyotp",
        option
      );
      let json = await response.json();
      console.log(json);
      Keyboard.dismiss();
      if (json.status === 1) {
        await AsyncStorage.setItem("login", "True");
        navigation.navigate("Home");
      } else {
        ToastAndroid.show("Otp is incorrect", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlePressBack = () => {
    navigation.navigate("EnterOtp");
  };
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <TouchableWithoutFeedback
            onPress={handlePressBack}
            style={styles.leftArrow}
          >
            <Image
              source={require("../../assets/icons8-left-arrow-60.png")}
            ></Image>
          </TouchableWithoutFeedback>

          <Image
            source={require("../../assets/logo.png")}
            style={{ height: "60%" }}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputBox}>
            <Image
              source={require("../../assets/icons8-unlock-message-60.png")}
              style={styles.callIcon}
            ></Image>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              value={otp}
              onChangeText={(text) => {
                setOtp(text);
              }}
            />
            <Pressable style={styles.button} onPress={handlePress}>
              <Text style={styles.btnText}>Submit</Text>
            </Pressable>
            <Text style={styles.text}>Resend OTP</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SecondScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e6e6",
    //     alignItems: "center",
  },
  logoContainer: {
    //     backgroundColor: "red",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    //     padding: "10%",
  },
  leftArrow: {},

  formContainer: {
    flex: 6,
    //     backgroundColor: "red",
    alignItems: "center",
  },
  inputBox: {
    height: "55%",
    width: "85%",
    bottom: 10,
    backgroundColor: "white",
    //     borderWidth: 1,
    borderRadius: 20,
    //     borderColor: "gray",
    justifyContent: "center",
    //     paddingVertical: 25,
  },
  callIcon: {
    position: "absolute",
    left: "40%",
    top: -25,
  },
  input: {
    marginHorizontal: 25,
    marginVertical: 10,
    borderBottomWidth: 2,
    fontSize: 20,
    color: "black",
    borderRadius: 35,
    borderColor: "lightgray",
    height: 65,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#81E072",
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "75%",
    borderRadius: 25,
    marginTop: 10,
    justifyContent: "center",
  },
  btnText: {
    color: "#4794fd",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "lightgray",
    textAlign: "center",
    marginTop: 15,
  },
});
