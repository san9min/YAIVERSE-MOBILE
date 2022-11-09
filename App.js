import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

import MainScreen from "./screens/main";
import StartScreen from "./screens/start";
import GalleryScreen from "./screens/gallery";
import CameraScreen from "./screens/camera";
import StyleChooseScreen from "./screens/style_choose";
import ResultScreen from "./screens/result";
import DetailScreen from "./screens/style_detail";
import BottomTabs from "./tab";
import LoginScreen from "./login";
import React, { useState } from "react";
import {
  Nunito_800ExtraBold,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
const Stack = createStackNavigator();
function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const fontAssets = cacheFonts([
          { Nunito_800ExtraBold: Nunito_800ExtraBold },
          { Nunito_400Regular: Nunito_400Regular },
          { Nunito_600SemiBold: Nunito_600SemiBold },
          { Nunito_700Bold_Italic: Nunito_700Bold },
        ]);
        await Promise.all([...fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const [id, setId] = useState(null);
  if (!appIsReady) {
    return null;
  }
  if (id == null && appIsReady) {
    return <LoginScreen id={id} setId={setId} />;
  } else {
    return (
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
            name="Start"
            component={StartScreen}
            options={{
              title: "YAIVERSE",
              headerStyle: {
                backgroundColor: "rgb(24,24,24)",
              },
              headerShadowVisible: false,
              headerMode: "screen",
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#546DF2",
                fontSize: 24,
                fontFamily: "Nunito_800ExtraBold",
              },
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={{
              title: "YAIVERSE",
              headerStyle: {
                backgroundColor: "rgb(24,24,24)",
              },
              headerShadowVisible: false,
              headerTintColor: "white",
              headerMode: "screen",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#546DF2",
                fontSize: 24,
                fontFamily: "Nunito_800ExtraBold",
              },
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              title: "YAIVERSE",
              headerStyle: {
                backgroundColor: "rgb(24,24,24)",
              },
              headerShadowVisible: false,
              headerMode: "screen",
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#546DF2",
                fontSize: 24,
                fontFamily: "Nunito_800ExtraBold",
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
                color: "#546DF2",
                fontSize: 24,
                fontFamily: "Nunito_800ExtraBold",
              },
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              presentation: "modal",
              headerShown: false,
              headerMode: "none",
              cardStyle: {
                backgroundColor: "transparent",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
