import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeamScreen from "./screens/team";
import MainScreen from "./screens/main";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarActiveTintColor="red"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgb(32,32,32)",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: (props) => (
            <Text style={{ color: "grey", fontSize: 12 }}>Home</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color="grey"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          tabBarLabel: (props) => (
            <Text style={{ color: "grey", fontSize: 12 }}>Team</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={24}
                color="grey"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
