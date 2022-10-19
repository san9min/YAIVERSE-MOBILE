import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeamScreen from "./screens/team";
import MainScreen from "./screens/main";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

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
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{ color: focused? "gold" : "grey", fontSize: 12 }}>Home</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Entypo name="home" size={24} color={focused? "gold" : "grey"} />
              
            );
          },
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          tabBarLabel: ({ size, focused, color}) => (
            <Text style={{ color: focused? "gold" : "grey", fontSize: 12 }}>Team</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons
                name= "people" 
                size={24}
                color={focused? "gold" : "grey"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
