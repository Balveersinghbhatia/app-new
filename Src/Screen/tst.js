<Tab.Navigator
  initialRouteName="Dashboard"
  activeColor={primaryGreen}
  inactiveColor={"black"}
  barStyle={{
    backgroundColor: "white",
    // paddingBottom: 10,
    borderColor: primaryGreen,
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    // zIndex: 99,
  }}
  labeled={false}
>
  {/* Dashboard page */}
  <Tab.Screen
    name="Dashboard"
    component={Dashboard}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
      ),
    }}
  />

  {/* Notification page */}
  <Tab.Screen
    name="Notifications"
    component={Dashboard}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="bell-ring" color={color} size={26} />
      ),
    }}
  />
  {/* Settings page */}
  <Tab.Screen
    name="Settings"
    component={Dashboard}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="cog" color={color} size={26} />
      ),
    }}
  />
  {/* Cart */}
  <Tab.Screen
    name="Cart"
    component={Dashboard}
    options={{
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="cart" color={color} size={26} />
      ),
    }}
  />
</Tab.Navigator>;
