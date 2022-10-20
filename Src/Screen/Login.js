import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ToastAndroid,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
const Login = ({ navigation }) => {
  const [showModal, setModal] = useState(false);
  const [screen, setScreen] = useState("get");
  const [number, onChangeNumber] = useState("");
  const [otp, onChangeOtp] = useState("");
  const handlePress = async () => {};
  const handlePressNext = async () => {
    if (number.length === 10) {
      let formData = new FormData();
      formData.append("c_mob", number);
      const option = {
        method: "POST",
        body: formData,
      };
      try {
        let response = await fetch(
          "http://test.maymornings.com/index.php/Api/Customers/sendotp",
          option
        );
        let json = await response.json();
        console.log(json);
        // if json.status is 1 means otp send success
        if (json.status === 1) {
          await AsyncStorage.setItem("number", number);

          setScreen("verify");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("Invalid phone no!", ToastAndroid.SHORT);
    }
  };
  const handlePhonePress = () => {
    setModal(true);
  };
  const handlePressBack = () => {
    setModal(false);
  };
  const handlePressBackVerify = () => {
    setScreen("get");
  };

  const handlePressNextVerify = async () => {
    if (otp.length === 6) {
      let formData = new FormData();
      formData.append("c_mob", number);
      formData.append("c_otp", otp);
      const option = {
        method: "POST",
        body: formData,
      };
      try {
        let response = await fetch(
          "http://test.maymornings.com/index.php/Api/Customers/verifyotp",
          option
        );
        let json = await response.json();
        console.log(json);
        // if json.status is 1 means otp send success
        if (json.status === 1) {
          await AsyncStorage.setItem("number", number);
          await AsyncStorage.setItem("login", "true");
          navigation.navigate("Home");
        } else {
          ToastAndroid.show("Invalid otp!", ToastAndroid.SHORT);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("Invalid otp!", ToastAndroid.SHORT);
    }
  };
  const handleFbPress = () => {};

  const checkIfLogin = async () => {
    let login = await AsyncStorage.getItem("login");

    if (login === "true") {
      console.log("logged in already!");
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    checkIfLogin();
  }, []);

  return (
    <>
      <View style={styles.body}>
        <LinearGradient
          colors={["#78FFB7", "#004E24"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={styles.gradientBg}
        />
        <View style={styles.header}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ height: "60%" }}
            resizeMode="contain"
          ></Image>
        </View>
        {showModal === false ? (
          <View style={styles.main}>
            <View style={styles.section}>
              <Text style={styles.heading}> Login with</Text>

              <Pressable
                style={[styles.phoneSection, styles.innerSection]}
                onPress={handlePhonePress}
              >
                <Text style={styles.text}>Phone number</Text>
                <Image
                  source={require("../../assets/call.png")}
                  style={[styles.icon, { transform: [{ rotate: "-90deg" }] }]}
                ></Image>
              </Pressable>
              <Pressable style={[styles.fbSection, styles.innerSection]}>
                <Text style={styles.text}>Facebook</Text>
                <Image
                  source={require("../../assets/facebook.png")}
                  style={styles.icon}
                ></Image>
              </Pressable>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.main}></View>
            {screen === "get" ? (
              <View style={styles.OtpModal}>
                <Text style={[styles.heading, { marginBottom: 0 }]}>
                  Enter your phone number
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="+91"
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.backButton]}
                    onPress={handlePressBack}
                  >
                    <Text style={styles.btnText}>Back</Text>
                  </Pressable>
                  <Pressable onPress={handlePressNext}>
                    <LinearGradient
                      colors={["#78FFB7", "#004E24"]}
                      start={{
                        x: 0,
                        y: 0,
                      }}
                      end={{
                        x: 1,
                        y: 1,
                      }}
                      style={styles.button}
                    >
                      <Text style={[{ color: "white" }, styles.btnText]}>
                        Next
                      </Text>
                    </LinearGradient>
                  </Pressable>
                </View>
              </View>
            ) : (
              <View style={styles.OtpModal}>
                <Text style={[styles.heading, { marginBottom: 0 }]}>
                  We just send you a code
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeOtp}
                  value={otp}
                  placeholder="Insert the 6-digit code"
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.backButton]}
                    onPress={handlePressBackVerify}
                  >
                    <Text style={styles.btnText}>Back</Text>
                  </Pressable>
                  <Pressable onPress={handlePressNextVerify}>
                    <LinearGradient
                      colors={["#78FFB7", "#004E24"]}
                      start={{
                        x: 0,
                        y: 0,
                      }}
                      end={{
                        x: 1,
                        y: 1,
                      }}
                      style={styles.button}
                    >
                      <Text style={[{ color: "white" }, styles.btnText]}>
                        Next
                      </Text>
                    </LinearGradient>
                  </Pressable>
                </View>
              </View>
            )}
          </>
        )}
      </View>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  gradientBg: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  header: {
    //     backgroundColor: "red",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    //     padding: "10%",
  },
  main: {
    flex: 6,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  section: {
    height: "65%",
    width: "90%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: RFPercentage(8),
  },
  heading: {
    textAlign: "center",
    fontSize: RFPercentage(3),
    marginBottom: RFPercentage(5),
  },
  innerSection: {
    flexDirection: "row",
    width: "85%",
    borderRadius: 25,
    alignSelf: "center",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
  phoneSection: { backgroundColor: "#00CB1D" },
  fbSection: { backgroundColor: "#4267B2" },
  text: {
    color: "white",
  },
  icon: {
    height: 40,
    width: 40,
    position: "absolute",
    right: 10,
  },
  OtpModal: {
    height: "40%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    position: "absolute",
    top: RFPercentage(40),
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: RFPercentage(6),
  },
  input: {
    height: 50,
    width: "85%",
    margin: 12,
    // borderWidth: 1,
    backgroundColor: "#b4b4b4",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 25,
    textAlign: "center",
  },
  buttonContainer: {
    // marginTop: RFPercentage(3),
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    // backgroundColor: "red",
  },
  backButton: {
    borderWidth: 2,
    borderColor: "#004E24",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
