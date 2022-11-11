import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function StylePreview(props) {
  const name = props.name;
  const imageUri = props.imageUri;
  const width = parseInt(props.width / 2.5);
  const heigth = parseInt(props.width / 4);
  const BannerSet = {
    JOJO: { src: require("../assets/jojo/refer.png") },
    DISNEY: { src: require("../assets/disney/refer.jpg") },
    ARCANE: { src: require("../assets/arcane/refer.png") },
    ART: { src: require("../assets/art/refer.png") },
    SKETCH: { src: require("../assets/sketch/refer.png") },
    프리드로우: { src: require("../assets/freedraw/refer.jpg") },
    여신강림: { src: require("../assets/truebeauty/refer.jpg") },
    침착맨: { src: require("../assets/calmdown/refer.jpg") },
    이태원클라쓰: { src: require("../assets/itaewonclass/refer.png") },
    외모지상주의: { src: require("../assets/lookism/refer.png") },
  };
  return (
    <View style={{ width: width, margin: 12 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Detail", {
            name: name,
            imageUri: imageUri,
          });
        }}
      >
        <View>
          <Image
            source={BannerSet[name]["src"]}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: heigth,
              borderRadius: 2,
            }}
          />
          <Text
            style={[styles.styletext, { fontFamily: "Nunito_600SemiBold" }]}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  5;
}

export default StylePreview;

const styles = StyleSheet.create({
  styletext: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
});
