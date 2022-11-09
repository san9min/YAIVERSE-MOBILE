import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeamScreen from "./screens/tab_screens/team";
import ExampleScreen from "./screens/tab_screens/style_example";
import MainScreen from "./screens/main";
import UserScreen from "./screens/tab_screens/user";
import { Text } from "react-native";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarActiveTintColor="red"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgb(24,24,24)",
          borderTopColor: "rgb(32,32,32)",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? "#A154F2" : "grey", fontSize: 12 }}>
              Home
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Entypo
                name="home"
                size={24}
                color={focused ? "#A154F2" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Example"
        component={ExampleScreen}
        options={{
          tabBarLabel: ({ size, focused, color }) => (
            <Text style={{ color: focused ? "#A154F2" : "grey", fontSize: 12 }}>
              Style
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons
                name="brush-sharp"
                size={24}
                color={focused ? "#A154F2" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: ({ size, focused, color }) => (
            <Text style={{ color: focused ? "#A154F2" : "grey", fontSize: 12 }}>
              Avatar
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FontAwesome
                name="user-circle"
                size={24}
                color={focused ? "#A154F2" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          tabBarLabel: ({ size, focused, color }) => (
            <Text style={{ color: focused ? "#A154F2" : "grey", fontSize: 12 }}>
              Team
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons
                name="business"
                size={24}
                color={focused ? "#A154F2" : "grey"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
