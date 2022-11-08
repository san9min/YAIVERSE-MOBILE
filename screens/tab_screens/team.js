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
      <View>
        <Text style={styles.memeber}>Member</Text>
      </View>
      <ScrollView>
        <View style={styles.teamContainer}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth / 2,
            }}
          >
            <Character character_image={ImageSet["minsu"]} />
            <Text style={styles.teamoneName}>김민수</Text>
            <Text style={styles.teamoneRole}>AI LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 7th</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth / 2,
            }}
          >
            <Character character_image={ImageSet["minsu"]} />
            <Text style={styles.teamoneName}>김민수</Text>
            <Text style={styles.teamoneRole}>AI LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 7th</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth / 2,
            }}
          >
            <Character character_image={ImageSet["minsu"]} />
            <Text style={styles.teamoneName}>김민수</Text>
            <Text style={styles.teamoneRole}>AI LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 7th</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth / 2,
            }}
          >
            <Character character_image={ImageSet["minsu"]} />
            <Text style={styles.teamoneName}>김민수</Text>
            <Text style={styles.teamoneRole}>AI LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 7th</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth / 2,
            }}
          >
            <Character character_image={ImageSet["minsu"]} />
            <Text style={styles.teamoneName}>김민수</Text>
            <Text style={styles.teamoneRole}>AI LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 7th</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth / 2,
            }}
          >
            <Character character_image={ImageSet["minsu"]} />
            <Text style={styles.teamoneName}>김민수</Text>
            <Text style={styles.teamoneRole}>AI LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 7th</Text>
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
  memeber: {
    color: "white",
    margin: 12,
    fontSize: 18,
    fontWeight: "bolder",
  },
  title: {
    justifyContent: "center",
    backgroundColor: "rgb(24,24,24)",
    padding: 12,
    paddingTop: 48,
  },
  titletext: {
    color: "#546DF2",
    fontSize: 24,
    fontWeight: "bold",
  },
  teamContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  teamoneName: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  teamoneRole: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  teamoneTh: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});
