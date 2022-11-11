import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";

export default function CameraScreen(props) {
  //카메라
  const cameraRef = useRef();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  //갤러리
  const [image, setImage] = useState(null);
  const windowWidth = Dimensions.get("window").width;
  //카메라
  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const onSnap = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1.0,
        base64: true,
      };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      console.log(source);
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        setImage(source);
      }
    }
  };
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(24,24,24)",
        }}
      >
        <Text style={{ textAlign: "center", color: "white", margin: 10 }}>
          YAIverse가 카메라에 액세스하도록 허용
        </Text>
        <Button onPress={requestPermission} title="액세스 허용" />
      </View>
    );
  }
  function toggleCameraType() {
    if (isPreview) {
      return;
    }
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  //갤러리
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    console.log(result.uri);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const cancelImage = async () => {
    setImage(null);
  };
  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const cancel = async () => {
    await cancelImage();
    cancelPreview();
  };

  return (
    <SafeAreaView style={styles.container}>
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
              onPress={() => {
                props.navigation.navigate("StyleChoose", {
                  image: image,
                  col: null,
                });
              }}
            >
              <LinearGradient
                colors={["#546DF2", "#A154F2"]}
                style={styles.continueButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text
                  style={[
                    styles.continueButtontext,
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
      {!image && (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          onCameraReady={onCameraReady}
        />
      )}
      {!isPreview && !image && (
        <View style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={pickImage}>
              <FontAwesome name="photo" size={30} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={!isCameraReady}
              onPress={onSnap}
            >
              <FontAwesome name="circle-o" size={100} color="white" />
            </TouchableOpacity>
            <TouchableOpacity //flip button
              disabled={!isCameraReady}
              onPress={toggleCameraType}
            >
              <Ionicons name="sync-circle" size={40} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgb(24,24,24)" },
  camera: {
    flex: 10,
  },
  buttonContainer: {
    flex: 2,
    backgroundColor: "transparent",
    margin: 32,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  preview: { flex: 13 },
  imageContainer: {
    flex: 8,
    backgroundColor: "rgb(18,18,18)",
    justifyContent: "center",
    alignItems: "center",
  },
  continueButton: {
    backgroundColor: "#546DF2",
    color: "white",
    alignItems: "center",
    padding: 8,
    margin: 32,
    borderRadius: 8,
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
    margin: 20,
  },
  continueButtontext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
