import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { primaryBlue } from "../../Configs/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TreeSlider from "../Components/TreeSlider";
import QuoteSldier from "../Components/QuoteSlider";
import Offers from "../Components/Offers";
import TreeIndividual from "./TreeIndividual";
const Main = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("orderHistory");
  };
  const handleAccPress = () => {
    navigation.navigate("Settings");
  };
  const handleNotifPress = () => {
    navigation.navigate("Notifications");
  };
  return (
    <>
      {/* <TopBar title="Dashboard"></TopBar> */}
      <StatusBar backgroundColor={"#4c9e2f"}></StatusBar>

      <ScrollView>
        <View style={styles.header}>
          <View>
            <MaterialCommunityIcons
              onPress={handleAccPress}
              name="account-circle"
              size={30}
            ></MaterialCommunityIcons>
          </View>
          <View>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
              resizeMethod="auto"
            ></Image>
          </View>
          <View>
            <MaterialCommunityIcons
              onPress={handleNotifPress}
              name="bell"
              size={30}
            ></MaterialCommunityIcons>
          </View>
        </View>

        {/* Tree carousal */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Trees</Text>
          <TreeSlider> </TreeSlider>
        </View>

        {/* Why our app? */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Why MeAndMyTree?</Text>
          <View style={styles.sectionContent}>
            <View style={styles.row}>
              <Text style={styles.subheading}>Sub-heading 1</Text>
              <Text style={styles.sectionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                quas.
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subheading}>Sub-heading 2</Text>
              <Text style={styles.sectionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                quas.
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subheading}>Sub-heading 3</Text>
              <Text style={styles.sectionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                quas.
              </Text>
            </View>
          </View>
        </View>
        {/* Offers */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Offers</Text>
          <Offers></Offers>
        </View>
        {/* Quotes Slider */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Quotes</Text>
          <QuoteSldier></QuoteSldier>
        </View>
      </ScrollView>
    </>
  );
};

const Dashboard = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.body}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="dashboard"
          component={Main}
          options=""
        ></Stack.Screen>
        <Stack.Screen
          name="treeIndividual"
          component={TreeIndividual}
          options=""
        ></Stack.Screen>
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // //marginTop: StatusBar.currentHeight,
    flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
  },
  container: {
    flex: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    // backgroundColor: "pink",
  },
  logo: {
    height: 100,
    // backgroundColor: "red",
    width: 100,
  },
  sectionHeading: {
    fontSize: 22,
    alignSelf: "flex-start",
    fontWeight: "bold",
    // textAlign: "center",
    // backgroundColor: "red",
    // alignSelf: "center",
  },
  subheading: {
    fontSize: 18,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionContent: {
    marginTop: 10,
    // paddingLeft: 10,
  },
  sectionText: { fontSize: 18 },
  section: {
    alignItems: "center",
    paddingHorizontal: "5%",
    marginVertical: 10,
  },
  mealsContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#929292",
    elevation: 3,
    padding: 10,
    // backgroundColor: "red",
  },
  mealImage: { height: 75, width: 75 },
  mealHeading: {
    fontSize: 15,
  },
  rightStyle: {
    width: 75,
    borderBottomWidth: 75,
    borderBottomColor: primaryBlue,
    borderLeftColor: "transparent",
    borderLeftWidth: 75,
  },
  rightArrow: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 99,
  },
  row: {
    marginVertical: 10,
  },
  // subscription section style
  icon: {
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
    alignItems: "center",
  },
  iconTxt: {
    color: "gray",
    fontSize: 18,
  },
});
export default Dashboard;
