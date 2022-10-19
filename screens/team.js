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

export default function TeamScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={require("../assets/Team.png")}
        />
        <Text style={styles.bannertext}>About YAIverse</Text>
      </View>
      <ScrollView style={{ width: windowWidth }}>
        <Text style={{ color: "white" }}>팀, 팀원 소개</Text>
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
    height : 200,
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
