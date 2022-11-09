import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function StartScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.emptyspace} />
      <View style={styles.start}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Gallery");
          }}
          style={styles.startButton}
        >
          <LinearGradient
            colors={["#546DF2", "#A154F2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <FontAwesome name="photo" size={36} color="white" />
            <Text
              style={[styles.startText, { fontFamily: "Nunito_400Regular" }]}
            >
              Gallery
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Camera");
          }}
          style={styles.startButton}
        >
          <LinearGradient
            colors={["#546DF2", "#A154F2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Entypo name="camera" size={36} color="white" />
            <Text
              style={[styles.startText, { fontFamily: "Nunito_400Regular" }]}
            >
              Camera
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.emptyspace} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(18,18,18)",
  },
  emptyspace: {
    flex: 1,
  },
  start: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  startButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    marginHorizontal: 32,
    borderRadius: 70,
  },
  startText: {
    color: "white",
    fontWeight: "300",
    fontSize: 12,
  },
  navigationgoicon: {
    position: "absolute",
    right: 20,
  },
});
