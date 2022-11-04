import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function StylePreview(props) {
  const name = props.name;
  const imageUri = props.imageUri;
  const width = parseInt(props.width / 2);
  const heigth = parseInt(props.width / 4);
  const BannerSet = {
    JOJO: { src: require("../assets/jojo/refer.png") },
    DISNEY: { src: require("../assets/disney/refer.png") },
    JINX: { src: require("../assets/jinx/refer.png") },
    ART: { src: require("../assets/art/refer.png") },
    SKETCH: { src: require("../assets/sketch/refer.png") },
    CAITLYN: { src: require("../assets/caitlyn/refer.png") },
  };
  return (
    <View style={{ width: width, padding: 10 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Detail", {
            name: name,
            imageUri: imageUri,
          });
        }}
      >
        <View>
          <Text style={styles.styletext}>{name}</Text>
          <Image
            source={BannerSet[name]["src"]}
            style={{ resizeMode: "cover", width: "100%", height: heigth }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default StylePreview;

const styles = StyleSheet.create({
  styletext: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
