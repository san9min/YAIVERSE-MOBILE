import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";

export default function GalleryScreen(props) {
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
      <View style={styles.title} />
      {!image && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              pickImage();
            }}
          >
            <LinearGradient
              colors={["#546DF2", "#A154F2"]}
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text
                style={[
                  styles.buttonText,
                  { fontFamily: "Nunito_800ExtraBold" },
                ]}
              >
                Pick a Photo
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("StyleChoose", { image: image });
              }}
            >
              <LinearGradient
                colors={["#546DF2", "#A154F2"]}
                style={styles.button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { fontFamily: "Nunito_800ExtraBold" },
                  ]}
                >
                  Continue
                </Text>
              </LinearGradient>
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
  },
  titletext: {
    color: "#546DF2",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
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
    color: "#546DF2",
    fontSize: 24,
    fontWeight: "700",
  },
  imageContainer: {
    flex: 6,
    backgroundColor: "rgb(18,18,18)",
    justifyContent: "center",
    alignItems: "center",
  },

  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  button: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 60,
    margin: 2,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
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
