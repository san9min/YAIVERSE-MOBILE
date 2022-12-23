import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { API_URL } from "./config";

// Send a photo you take to your Server and get a result

export default function SendingScreen(props) {
  const height = Dimensions.get("window").height;
  const imageUri = props.route.params.image;

  const [resultImage, setresultImage] = useState(null);

  const windowWidth = Dimensions.get("window").width;

  // send your image to your server
  useEffect(() => {
    let startTime = new Date().getTime();
    setresultImage(null);

    const formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      type: "image/png", // Write the data type you want
      name: "originalImage.png",
    });
    axios
      .post(`${API_URL}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        setresultImage(result.data);
        let endTime = new Date().getTime();
        console.log("걸린 시간 : ", (endTime - startTime) * 1e-3);
      })
      .catch((err) => {
        console.error(err);
        alert("사진 변환에 실패했습니다.");
        props.navigation.reset({
          routes: [
            {
              name: "Camera",
            },
          ],
        });
      });
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <View style={styles.title}>
            <Text style={styles.titletext}>YAI</Text>
          </View>
          {/* Waiting for Server Response*/}
          {!resultImage && (
            <View
              style={{
                height: height / 1.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#546DF2" />
            </View>
          )}

          {/* Get the result from server (response) and render it */}
          {resultImage && (
            <View>
              <View
                style={{
                  width: windowWidth,
                  height: windowWidth,
                  borderColor: "grey",
                }}
              >
                <Image
                  source={{ uri: `${API_URL}/` }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(24,24,24)",
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgb(24,24,24)",
    padding: 12,
    marginTop: 24,
  },
  titletext: {
    color: "#4B89DC",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  smallbutton: {
    width: 60,
    height: 60,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "#A154F2",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  bigbutton: {
    width: 84,
    height: 84,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },
});
