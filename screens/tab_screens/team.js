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
import Character from "../../components/character";

export default function TeamScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  const ImageSet = {
    minsu: require("../../assets/team/minsu.png"),
    jisoo: require("../../assets/team/jisoo.png"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletext}>About YAIverse</Text>
      </View>
      <ScrollView>
        <View style={styles.teamContainer}>
          <View style={styles.teamoneContainer}>
            <Character character_image={ImageSet["minsu"]} />
            <Text style={styles.teamoneName}>Minsu Kim</Text>
            <Text style={styles.teamoneRole}>AI LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 7th</Text>
          </View>
          <View style={styles.teamoneContainer}>
            <Character character_image={ImageSet["jisoo"]} />
            <Text style={styles.teamoneName}>Jisoo Kim</Text>
            <Text style={styles.teamoneRole}>AI Reaserch</Text>
            <Text style={styles.teamoneTh}>YAI 10th</Text>
          </View>
          <View style={styles.teamoneContainer}>
            <Character character_image={ImageSet["jisoo"]} />
            <Text style={styles.teamoneName}>Jisoo Kim</Text>
            <Text style={styles.teamoneRole}>AI Reaserch</Text>
            <Text style={styles.teamoneTh}>YAI 10th</Text>
          </View>
          <View style={styles.teamoneContainer}>
            <Character character_image={ImageSet["jisoo"]} />
            <Text style={styles.teamoneName}>Jisoo Kim</Text>
            <Text style={styles.teamoneRole}>AI Reaserch</Text>
            <Text style={styles.teamoneTh}>YAI 10th</Text>
          </View>
          <View style={styles.teamoneContainer}>
            <Character character_image={ImageSet["jisoo"]} />
            <Text style={styles.teamoneName}>Jisoo Kim</Text>
            <Text style={styles.teamoneRole}>AI Reaserch</Text>
            <Text style={styles.teamoneTh}>YAI 10th</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(18,18,18)",
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
    fontSize: 24,
    fontWeight: "600",
    position: "absolute",
    bottom: 0,
  },
  title: {
    justifyContent: "center",
    backgroundColor: "rgb(24,24,24)",
    padding: 12,
  },
  titletext: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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
  teamContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 30,
  },
  teamoneContainer: {
    justifyContent: "center",
    margin: 20,
    alignItems: "center",
  },
  teamoneName: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  teamoneRole: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  teamoneTh: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});
