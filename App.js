import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MainScreen from "./screens/main";
import CameraScreen from "./screens/camera";
import ManualScreen from "./screens/manual";
import StyleChooseScreen from "./screens/style_choose";
import ResultScreen from "./screens/result";
import DetailScreen from "./screens/style_detail";
import BottomTabs from "./tab";
import LoginScreen from "./login";
import { useEffect, useState } from "react";
const Stack = createStackNavigator();

export default function App() {
  const [id, setId] = useState(null);
  if (id == null) {
    return <LoginScreen id={id} setId={setId} />;
  } else {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tab"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
              options={{
                title: "YAIverse",
                headerStyle: {
                  backgroundColor: "rgb(24,24,24)",
                },
                headerShadowVisible: false,
                headerMode: "screen",
                headerTintColor: "white",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "dodgerblue",
                  fontSize: 24,
                },
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="StyleChoose"
              component={StyleChooseScreen}
              options={{
                title: "STYLE",
                headerStyle: {
                  backgroundColor: "rgb(24,24,24)",
                },
                headerShadowVisible: false,
                headerTintColor: "white",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "dodgerblue",
                  fontSize: 24,
                },
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Result"
              component={ResultScreen}
              options={{
                headerShown: false,
                // title: "Avatar",
                // headerStyle: {
                //   backgroundColor: "rgb(24,24,24)",
                // },
                // headerShadowVisible: false,
                // headerTintColor: "white",
                // headerTitleStyle: {
                //   fontWeight: "bold",
                //   color: "dodgerblue",
                //   fontSize: 24,
                // },
                // headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Manual"
              component={ManualScreen}
              options={{
                title: "Manual",
                headerStyle: {
                  backgroundColor: "rgb(24,24,24)",
                },
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTintColor: "white",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{
                presentation: "modal",
                headerShown: false,
                headerMode: "none",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: "rgb(24,24,24)" },
});
