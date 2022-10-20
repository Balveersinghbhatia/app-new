import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Src/Screen/Login";
import VerifyOtp from "./Src/Screen/VerifyOtp";
import Firstscreen from "./Src/Screen/Firstscreen";
import PropTypes from "prop-types";
import Home from "./Src/Screen/Home";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Firstscreen"
            component={Firstscreen}
          ></Stack.Screen>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="VerifyOtp" component={VerifyOtp}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
