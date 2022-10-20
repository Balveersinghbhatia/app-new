import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Dashboard from "./Dashboard";
import { primaryGreen } from "../../Configs/colors";
import TreeIndividual from "../Screen/TreeIndividual";
import Shop from "./Shop";
import Profile from "./Profile";
import Cart from "./CartScreen";
const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 15,
            left: 15,
            right: 15,
            borderRadius: 14,
            // borderWidth: 2,
          },
          tabBarShowLabel: false,
        }}
      >
        {/* Dashboard page */}
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "view-dashboard" : "view-dashboard"}
                color={focused ? "#4c9e2f" : "gray"}
                size={26}
              />
            ),
            // tabBarBadge: "99+",
          }}
        />

        {/* Shop page */}
        <Tab.Screen
          name="shopPage"
          component={Shop}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? "#4c9e2f" : "gray"}
                size={26}
              />
            ),
          }}
        />
        {/* Settings page */}
        <Tab.Screen
          name="Settings"
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="cog"
                color={focused ? "#4c9e2f" : "gray"}
                size={26}
              />
            ),
          }}
        />
        {/* Cart */}
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="cart"
                color={focused ? "#4c9e2f" : "gray"}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
