import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import StylePreview from "../components/stylepreview";

export default function StyleChooseScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  const imageUri = props.route.params.image;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          style={{
            width: windowWidth,
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.styleSelector}>
        <View style={{ borderBottomColor: "white", borderBottomWidth: 1 }}>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Where to Go
          </Text>
        </View>
        <ScrollView>
          <View style={styles.stylepreviewContainer}>
            <StylePreview
              name="JOJO"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
            />
            <StylePreview
              name="DISNEY"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
            />
            <StylePreview
              name="JINX"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
            />
            <StylePreview
              name="ART"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
            />
            <StylePreview
              name="SKETCH"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
            />
            <StylePreview
              name="CAITLYN"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgb(18,18,18)" },
  imageContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  styleSelector: {
    flex: 4,
  },
  styletext: {
    color: "white",
    fontSize: 12,
    marginLeft: 10,
  },
  stylepreviewContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
