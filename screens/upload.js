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
import CheckBox from "expo-checkbox";


export default function UploadScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  const imageUri = props.route.params.image;
  const [checkedState, setCheckedState] = useState(false);


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
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Choose the style you want
        </Text>
        <ScrollView style={styles.checkboxContainer}>
          <View style={styles.checkElements}>
            <CheckBox
              disabled={false}
              value={checkedState}
              onValueChange={() => setCheckedState(!checkedState)}
              color={checkedState ? "dodgerblue" : undefined}
            />
            <Text style={styles.styletext}>Disney</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.uploadButtonContainer}>
        <TouchableOpacity
          disabled={!checkedState}
          style={styles.uploadButton}
          onPress={() => {
            props.navigation.navigate("Loading",{style : checkedState, imageUri: imageUri});
          }}        >
          {!checkedState && <View style={styles.uploadBlur} />}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: checkedState ? "white" : "black",
            }}
          >
            Go to the YAIverse
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  imageContainer: {
    flex: 6,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  styleSelector: {
    flex: 4,
    margin: 5,
  },
  uploadButtonContainer: {
    flex: 2,
    justifyContent: "center",
  },
  uploadButton: {
    backgroundColor: "dodgerblue",
    color: "white",
    alignItems: "center",
    padding: 8,
    margin: 2,
  },
  checkboxContainer: {
    margin: 20,
  },
  checkElements: { flexDirection: "row", alignItems: "center" },
  styletext: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  uploadBlur: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#ffffffaa",
    zIndex: 999,
  },
});
