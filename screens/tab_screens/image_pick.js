import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";

export default function PhotoScreen(props) {
  const [image, setImage] = useState(null);
  const windowWidth = Dimensions.get("window").width;
  const cancelImage = async () => {
    setImage(null);
  };

  const cancel = async () => {
    await cancelImage();
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsEditing: true,
    });
    console.log(result.uri);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    pickImage();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.title}>
        <Text style={styles.titletext}>사진변환하기</Text>
      </View>

      {!image && (
        <TouchableOpacity
          onPress={() => {
            pickImage();
          }}
        >
          {/* <View style={styles.banner}>
            <Image
              style={styles.bannerImage}
              source={require("../../assets/machine.png")}
            />
            <Text style={styles.bannertext}>Travel</Text>
          </View>
          <View style={styles.navigation}>
            <FontAwesome5 name="user-astronaut" size={30} color="white" />
          </View> */}
          <LinearGradient
            // Button Linear Gradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.button}
          >
            <Text style={styles.textButton}>사진고르기</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
      {image && (
        <View style={styles.preview}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: image }}
              style={{
                width: windowWidth,
                height: "100%",
                resizeMode: "contain",
              }}
            />
            <TouchableOpacity
              onPress={cancel}
              style={styles.closeButton}
              activeOpacity={0.7}
            >
              <AntDesign name="close" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.continueButtonContainer}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => {
                props.navigation.navigate("StyleChoose", { image: image });
              }}
            >
              <Text style={styles.continueButtontext}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgb(18,18,18)" },
  banner: {
    justifyContent: "center",
    alignItems: "center",
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
  button: { margin: 40 },
  textButton: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    padding: 4,
    margin: 5,
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
  buttonContainer: {
    flex: 2,
    backgroundColor: "transparent",
    margin: 32,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  description: {
    color: "white",
    textAlign: "center",
  },
  preview: { flex: 13 },
  titleName: {
    color: "dodgerblue",
    fontSize: 24,
    fontWeight: "700",
  },
  imageContainer: {
    flex: 6,
    backgroundColor: "rgb(18,18,18)",
    justifyContent: "center",
    alignItems: "center",
  },
  continueButton: {
    backgroundColor: "dodgerblue",
    color: "white",
    alignItems: "center",
    padding: 8,
    margin: 2,
    borderRadius: 2,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  continueButtonContainer: {
    flex: 2,
    justifyContent: "center",
  },

  continueButtontext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  navigationtext: {
    color: "white",
    margin: 10,
  },
  navigation: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
