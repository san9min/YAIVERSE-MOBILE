import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Character from "../../components/character";

export default function TeamScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  const ImageSet = {
    minsu: require("../../assets/team/minsu.png"),
    jisoo: require("../../assets/team/jisoo.png"),
    sangmin: require("../../assets/team/sangmin.jpg"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.titletext, { fontFamily: "Nunito_800ExtraBold" }]}>
          ABOUT YAIVERSE
        </Text>
      </View>
      <View>
        <Text style={[styles.memeber, { fontFamily: "Nunito_800ExtraBold" }]}>
          Member
        </Text>
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
            <Character character_image={ImageSet["sangmin"]} />
            <Text style={styles.teamoneName}>이상민</Text>
            <Text style={styles.teamoneRole}>TEAM LEADER</Text>
            <Text style={styles.teamoneTh}>YAI 9th</Text>
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
    fontWeight: "bold",
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
    marginBottom: 2,
    fontFamily: "Jua_400Regular",
  },
  teamoneRole: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 2,
    fontFamily: "Nunito_800ExtraBold",
  },
  teamoneTh: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 2,
  },
});
