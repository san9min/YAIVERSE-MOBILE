import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  LogBox,
} from "react-native";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

LogBox.ignoreLogs(["Sending"]); //navigation에서 경고 계속있는데 해결 못해서 우선 ignore

export default function MainScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={require("../assets/banner.jpg")}
        />
        <Text style={styles.bannertext}>Welcome to YAIverse</Text>
      </View>
      <ScrollView style={{ width: windowWidth }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Manual");
          }}
          style={styles.navigation}
        >
          <Ionicons name="document-text" size={30} color="white" />
          <Text style={styles.navigationtext}>Manual</Text>

          <AntDesign
            name="right"
            size={24}
            color="white"
            style={styles.navigationgoicon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Camera");
          }}
          style={styles.navigation}
        >
          <FontAwesome name="camera" size={24} color="white" />
          <Text style={styles.navigationtext}>Take a Photo</Text>
          <AntDesign
            name="right"
            size={24}
            color="white"
            style={styles.navigationgoicon}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
  bannertext: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    position: "absolute",
    bottom: 0,
  },
  navigationtext: {
    color: "white",
    margin: 10,
  },
  navigation: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  navigationgoicon: {
    position: "absolute",
    right: 2,
  },
});
