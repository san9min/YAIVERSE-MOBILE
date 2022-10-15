import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./screens/main";
import CameraScreen from "./screens/camera";
import ManualScreen from "./screens/manual";
import UploadScreen from "./screens/upload";
import BottomTabs from "./tab";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="tab"
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
              title: "",
              //headerShown: false,
              headerTintColor: "white",
              headerTransparent: true,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{
              title: "",
              headerTintColor: "white",
              headerTransparent: true,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Manual"
            component={ManualScreen}
            options={{
              title: "Manual",
              headerStyle: {
                backgroundColor: "black",
              },
              headerBackTitleVisible: false,
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: "black" },
});
